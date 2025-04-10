import React, { useState, useEffect } from 'react';
import './index.css';

interface InputFormateadoProps {
    type?: string
    placeholder: string;
    onChange: (value: string) => void;
    keyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    formato?: 'mm/yy' | 'tarjeta' | 'custom' | 'number' | 'text' | 'email' | 'phone' | 'street';
    maxLength?: number;
    separadorPosicion?: number[];
    value?: string;
}

function InputFormateado({
    placeholder,
    onChange,
    formato,
    maxLength, // MM/YY tiene 5 caracteres incluyendo la barra
    separadorPosicion = [], // Posición donde insertar el separador,
    keyUp, value
}: InputFormateadoProps) {
    const [valor, setValor] = useState('');


    const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputVal = e.target.value;
        if (formato === 'tarjeta' || formato === 'mm/yy' || formato === 'number') {
            e.preventDefault(); // Evitar el comportamiento por defecto del evento
            inputVal = e.target.value.replace(/\D/g, ''); // Elimina todo lo que no sea dígito
        }

        // Aplicar formato según el tipo
        if (formato === 'mm/yy') {
            if (inputVal.length > 4) inputVal = inputVal.substring(0, 4);
            if (inputVal.length > 2) {
                inputVal = inputVal.substring(0, 2) + '/' + inputVal.substring(2);
            }
        } else if (separadorPosicion.length > 0) {
            // Formato con separadores en posiciones específicas
            let valFormateado = '';
            for (let i = 0; i < inputVal.length; i++) {
                if (separadorPosicion.includes(i)) valFormateado += '/';
                valFormateado += inputVal[i];
            }
            inputVal = valFormateado.substring(0, maxLength);
        } else if (formato === 'email') {
            const regex = /^[^a-zA-Z0-9@-_]+$/; // Expresión regular para validar el formato de correo electrónico
            if (regex.test(inputVal)) {
                alert('Formato de correo electrónico no válido');
                inputVal = ''; // Reiniciar el valor si no es válido
                inputVal = inputVal.replace(/[^a-zA-Z0-9@._-]/g, ''); // Elimina caracteres no válidos
            }
        } else if (formato === 'phone') {
            const regex = /^[0-9]+$/; // Expresión regular para validar el formato de teléfono
            if (!regex.test(inputVal)) {
                alert('Formato de teléfono no válido');
                inputVal = ''; // Reiniciar el valor si no es válido
                inputVal = inputVal.replace(/[^0-9]/g, ''); // Elimina caracteres no válidos
            }
        } else if (formato === 'street') {
            const regex = /^[a-zA-Z0-9 ]+$/; // Expresión regular para validar el formato de dirección
            if (!regex.test(inputVal)) {
                alert('Formato de dirección no válido');
                inputVal = ''; // Reiniciar el valor si no es válido
                inputVal = inputVal.replace(/[^a-zA-Z0-9 ]/g, ''); // Elimina caracteres no válidos
            }
        }
        else if (formato === 'text') {
            const regex = /^[a-zA-Z ]+$/; // Expresión regular para validar el formato de texto
            if (!regex.test(inputVal)) {
                alert('Formato de texto no válido');
                inputVal = ''; // Reiniciar el valor si no es válido
                inputVal = inputVal.replace(/[^a-zA-Z ]/g, ''); // Elimina caracteres no válidos
            }
        }


        setValor(inputVal);
        onChange(inputVal);
    };

    return (
        <div className='w-100 mb-3'>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={manejarCambio}
                className='inputPersonzalized'
                onKeyUp={keyUp}
                maxLength={maxLength}
            />
        </div>
    );
}

export default InputFormateado;