import axios from 'axios';
import { Product } from './common/Product';

const API_BASE_URL = 'http://localhost:3000';
const TOKEN_KEY = 'auth_token';

// Credenciales de administrador
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'secret123'
};

// Variables para controlar el estado del token
let authToken: string | null = null;
let tokenPromise: Promise<void> | null = null;

// Instancia de axios
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Función mejorada para generar y guardar el token
export const initializeAuthToken = async (): Promise<void | null> => {
    // Si ya hay una petición de token en curso, retornar esa promesa
    if (tokenPromise) return tokenPromise;

    tokenPromise = (async () => {
        console.log('Iniciando obtención de token... 1');
        try {
            console.log('Iniciando obtención de token...');

            // Verificar si ya tenemos un token válido en localStorage
            const storedToken = localStorage.getItem(TOKEN_KEY);
            if (storedToken) {
                authToken = storedToken;
                return;
            }

            // Hacer solo UNA petición para obtener el token
            const response = await axios.post(`${API_BASE_URL}/auth/login`, ADMIN_CREDENTIALS);

            // Verificar estructura de la respuesta
            if (!response.data || !response.data.access_token) {
                throw new Error('La respuesta no contiene un token válido');
            }

            authToken = response.data.token;
            localStorage.setItem(TOKEN_KEY, authToken ?? '');
        } catch (error) {
            // console.error('Error al generar token:', error);
            // throw new Error('No se pudo obtener el token de autenticación');
        } finally {
            // tokenPromise = null;
            // Hacer solo UNA petición para obtener el token
            const response = await axios.post(`${API_BASE_URL}/auth/login`, ADMIN_CREDENTIALS);

            // Verificar estructura de la respuesta
            if (!response.data || !response.data.token) {
                // throw new Error('La respuesta no contiene un token válido');
            }

            authToken = response.data.access_token;
            console.log(response.data)
            localStorage.setItem(TOKEN_KEY, authToken ?? '');
            console.log('Token obtenido:', authToken);
            console.log('Token obtenido y almacenado correctamente');

            console.log('Finalizando obtención de token...', authToken);
        }
    })();

    return tokenPromise;
};

// Función para obtener el token
const getAuthToken = async (): Promise<string> => {
    // Si ya tenemos el token en memoria, devolverlo
    if (authToken) return authToken;

    // Si no hay token, inicializarlo
    await initializeAuthToken();

    if (!authToken) {
        throw new Error('No se pudo obtener el token después de intentar generarlo');
    }

    return authToken;
};

// Interceptor para agregar token a las peticiones
api.interceptors.request.use(
    async (config) => {
        // Excluir la ruta de login del interceptor
        if (!config.url?.includes('/auth/login')) {
            try {
                const token = await getAuthToken();
                config.headers.Authorization = `Bearer ${token}`;
            } catch (error) {
                console.error('Error al obtener token para petición:', error);
                throw error;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Función para crear persona
const createPerson = async (personData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
}) => {
    try {
        const response = await api.post('/person', {
            ...personData,
            id: generateUUID(),
            userId: generateUUID()
        });
        return response.data;
    } catch (error: any) {
        console.error('Error en createPerson:', error.response?.data || error.message);
        throw error;
    }
};

// Función para procesar pago con token
const processPayment = async (paymentData: {
    userId: string;
    amount: number;
    currency: string;
    paymentMethod: string;
    cardNumber: string;
    cardHolder: string;
    expirationDate: string;
    cvv: string;
    orderId?: string;
    email: string;
}) => {
    try {
        const token = await getAuthToken();

        const response = await api.post('/transaction', {
            id: generateUUID(),
            userId: paymentData.userId,
            amount: paymentData.amount,
            currency: paymentData.currency || 'COP',
            status: 'pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            paymentMethod: paymentData.paymentMethod || 'CARD',
            transactionId: generateUUID(),
            orderId: paymentData.orderId || generateUUID(),
            paymentDetails: {
                cardNumber: paymentData.cardNumber,
                cardHolder: paymentData.cardHolder,
                expirationDate: paymentData.expirationDate,
                cvv: paymentData.cvv
            },
            paymentStatus: 'PROCESSING',
            paymentMethodId: 'wompi_card',
            email: paymentData.email,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error: any) {
        console.error('Error en processPayment:', error);

        if (error.response?.status === 401) {
            console.log('Token inválido, generando nuevo token...');
            localStorage.removeItem(TOKEN_KEY);
            return processPayment(paymentData); // Reintentar con nuevo token
        }

        throw error;
    }
};

// Función para obtener todos los productos
const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error: any) {
        console.error('Error en getAllProducts:', error.response?.data || error.message);
        throw error;
    }
};

// Función para obtener un producto por ID
const getProductById = async (productId: string): Promise<Product> => {
    try {
        const response = await api.get(`/products/${productId}`);
        return response.data;
    } catch (error: any) {
        console.error('Error en getProductById:', error.response?.data || error.message);
        throw error;
    }
};

// Generador de UUID
const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export const apiService = {
    initializeAuthToken,
    createPerson,
    processPayment,
    getCurrentToken: () => authToken,
    getProductById,
    getAllProducts,
    clearToken: () => {
        authToken = null;
        localStorage.removeItem(TOKEN_KEY);
    }
};


export default apiService;