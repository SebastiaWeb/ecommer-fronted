// Checkout.tsx
import { useDispatch, useSelector } from "react-redux";
import Body from "../common/Body";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Button from "../components/Button/Button";
import CreditCard from "../components/CreditCard/CreditCard";
import InputPersonalized from "../components/Input/Input";

import { 
  setCardNumber, 
  setExpirationDate, 
  setCvv, 
  setCardHolder,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setStreet,
  setInstallments,
  selectCardNumber,
  selectCardHolder,
  selectExpirationDate,
  selectCvv,
  selectFirstName,
  selectLastName,
  selectEmail,
  selectPhone,
  selectStreet,
  selectInstallments
} from '../components/Input/slice/creditCardSlice';
import { apiService } from '../api';

function Checkout() {
  const dispatch = useDispatch();

  // Credit card handlers
  const handleCardNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setCardNumber(input.value));
  };

  const handleExpireData = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setExpirationDate(input.value));
  };

  const handleCvv = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setCvv(input.value));
  };

  const handleCardHolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setCardHolder(input.value));
  };

  // Personal info handlers
  const handleFirstName = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setFirstName(input.value));
  };

  const handleLastName = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setLastName(input.value));
  };

  const handleEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setEmail(input.value));
  };

  const handlePhone = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setPhone(input.value));
  };

  const handleStreet = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    dispatch(setStreet(input.value));
  };

  const handleInstallments = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    dispatch(setInstallments(input.value));
  };

  // Selectores para obtener los datos del estado
  const cardNumber = useSelector(selectCardNumber);
  const cardHolder = useSelector(selectCardHolder);
  const expirationDate = useSelector(selectExpirationDate);
  const cvv = useSelector(selectCvv);
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const email = useSelector(selectEmail);
  const phone = useSelector(selectPhone);
  const street = useSelector(selectStreet);
  const installments = useSelector(selectInstallments);

  const handleBuyClick = async () => {
    // Validaciones previas (las que ya teníamos)
    if (!validateForm()) return;

    // setIsProcessing(true);
    
    try {
      // 1. Crear la persona/usuario
      const personData = {
        firstName,
        lastName,
        email,
        phone,
        address: street
      };

      const personResponse = await apiService.createPerson(personData);
      const userId = personResponse.id; // Asumimos que el backend devuelve el ID

      // 2. Procesar el pago
      const paymentData = {
        userId,
        amount: 10000, // Ejemplo: $10,000 COP
        currency: 'COP',
        paymentMethod: 'CARD',
        cardNumber: cardNumber.replace(/\s/g, ''), // Eliminar espacios
        cardHolder,
        expirationDate,
        cvv,
        installments,
        email, // ID de orden único
        orderId: `ORD-${Date.now()}`,
      };
      console.log(email, 'email')
      const paymentResponse = await apiService.processPayment(paymentData);
      
      // Manejar respuesta del pago
      if (paymentResponse.paymentStatus === 'APPROVED') {
        console.log('Pago realizado con éxito!');
        // Aquí podrías redirigir a una página de éxito o limpiar el formulario
      } else {
        console.error(`Pago rechazado: ${paymentResponse.errorMessage || 'Razón desconocida'}`);
      }
    } catch (error) {
      console.error('Error en el proceso de pago:', error);
      console.error('Ocurrió un error al procesar el pago');
    } finally {
      // setIsProcessing(false);
    }
  };

  const validateForm = () => {
    // Validar que todos los campos estén completos
    if (!cardNumber || cardNumber.length < 16) {
      console.error('Por favor ingrese un número de tarjeta válido');
      return;
    }

    if (!cardHolder) {
      console.error('Por favor ingrese el nombre del titular de la tarjeta');
      return;
    }

    if (!expirationDate || expirationDate.length < 5) {
      console.error('Por favor ingrese una fecha de expiración válida (MM/YY)');
      return;
    }

    if (!cvv || cvv.length < 3) {
      console.error('Por favor ingrese un CVV válido');
      return;
    }

    if (!firstName) {
      console.error('Por favor ingrese su nombre');
      return;
    }

    if (!lastName) {
      console.error('Por favor ingrese su apellido');
      return;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      console.error('Por favor ingrese un email válido');
      return;
    }

    if (!phone || phone.length < 8) {
      console.error('Por favor ingrese un número de teléfono válido');
      return;
    }

    if (!street) {
      console.error('Por favor ingrese su dirección');
      return;
    }
    // ... otras validaciones ...
    return true;
  };

  return (
    <div>
      <Navbar />
      <Body>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <div className="container row container-generic row p-md-5 justify-content-center align-items-start pt-4 mb-5">
            <div className="row justify-content-center col-12 col-lg-4 g-0 mb-md-3 mb-md-0" >
              <CreditCard />
            </div>
            <div className="col-12 col-lg-6 mt-md-0">
              <div className="col-12 col-lg-12 mt-5 mt-md-0">
                <div className="containerForm row g-0 justify-content-center">
                  <InputPersonalized
                    type="number"
                    placeholder="Card Number"
                    onChange={() => { }}
                    formato="tarjeta"
                    maxLength={19}
                    keyUp={handleCardNumber}
                  />
                  <div className="col-12 row p-0 g-0">
                    <div className="col-3 p-0 pe-1">
                      <InputPersonalized
                        type="text"
                        placeholder="Expired Date"
                        onChange={() => { }}
                        formato="mm/yy"
                        maxLength={5}
                        keyUp={handleExpireData}
                      />
                    </div>
                    <div className="col-3 p-0 ps-1">
                      <InputPersonalized
                        type="number"
                        placeholder="CVV"
                        onChange={() => { }}
                        maxLength={3}
                        formato="number"
                        keyUp={handleCvv}
                      />
                    </div>
                    <div className="row col-6 p-0 ps-1">
                      <label htmlFor="installments" className="col-4 label_installments text-end d-flex aling-items-center">Cuotas:</label>
                        <select name="installments" id="installments" className="col-8 installments" onChange={handleInstallments}>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                  </div>
                  <div className="col-12">
                    <InputPersonalized
                      type="text"
                      placeholder="Name"
                      onChange={() => { }}
                      formato="text"
                      keyUp={handleCardHolder}
                    />
                  </div>
                </div>
              </div>

              {/* FORM TWO */}
              <div className="col-12 col-lg-12 mt-3 mt-md-3 mt-lg-3 mb-5 mb-lg-0">
                <div className="containerForm row g-0 justify-content-center">
                  <InputPersonalized
                    type="text"
                    placeholder="NAME"
                    onChange={() => { }}
                    formato="text"
                    keyUp={handleFirstName}
                  />
                  <div className="col-12">
                    <InputPersonalized
                      type="text"
                      placeholder="LAST NAME"
                      onChange={() => { }}
                      formato="text"
                      keyUp={handleLastName}
                    />
                  </div>
                  <div className="col-12">
                    <InputPersonalized
                      type="email"
                      placeholder="Email"
                      onChange={() => { }}
                      formato="email"
                      keyUp={handleEmail}
                    />
                  </div>
                  <div className="col-12">
                    <InputPersonalized
                      type="text"
                      placeholder="PHONE"
                      maxLength={12}
                      onChange={() => { }}
                      formato="text"
                      keyUp={handlePhone}
                    />
                  </div>
                  <div className="col-12">
                    <InputPersonalized
                      type="text"
                      placeholder="STREET"
                      onChange={() => { }}
                      formato="text"
                      keyUp={handleStreet}
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-center g-0">
                    <Button  onClick={handleBuyClick}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Body>
      <div className="mt-5"></div>
      <div className="mt-3"></div>
      <Footer />
    </div>
  );
}

export default Checkout;