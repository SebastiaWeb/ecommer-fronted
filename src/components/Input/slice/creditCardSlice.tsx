// creditCardSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutState {
    cardNumber: string;
    cardHolder: string;
    expirationDate: string;
    cvv: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    street: string;
    installments: number;
}

const initialState: CheckoutState = {
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    installments: 0
};

export const creditCardSlice = createSlice({
    name: "creditCard",
    initialState,
    reducers: {
        setCardNumber: (state, action: PayloadAction<string>) => {
            state.cardNumber = action.payload;
        },
        setCardHolder: (state, action: PayloadAction<string>) => {
            state.cardHolder = action.payload;
        },
        setExpirationDate: (state, action: PayloadAction<string>) => {
            let inputVal = action.payload.replace(/\D/g, '');
            if (inputVal.length > 2) {
                inputVal = inputVal.substring(0, 2) + '/' + inputVal.substring(2);
            }
            state.expirationDate = inputVal.substring(0, 5);
        },
        setCvv: (state, action: PayloadAction<string>) => {
            state.cvv = action.payload;
        },
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setStreet: (state, action: PayloadAction<string>) => {
            state.street = action.payload;
        },
        setInstallments: (state, action: PayloadAction<string>) => {
            state.street = action.payload;
        },
        // Optional: A reset action to clear all fields
        resetCheckoutForm: () => initialState
    }
});

// Export actions
export const { 
    setCardNumber, 
    setCardHolder, 
    setExpirationDate, 
    setCvv,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setStreet,
    resetCheckoutForm,
    setInstallments
} = creditCardSlice.actions;

// Selectors
export const selectCardNumber = (state: any) => state.creditCardSlice.cardNumber;
export const selectCardHolder = (state: any) => state.creditCardSlice.cardHolder;
export const selectExpirationDate = (state: any) => state.creditCardSlice.expirationDate;
export const selectCvv = (state: any) => state.creditCardSlice.cvv;
export const selectFirstName = (state: any) => state.creditCardSlice.firstName;
export const selectLastName = (state: any) => state.creditCardSlice.lastName;
export const selectEmail = (state: any) => state.creditCardSlice.email;
export const selectPhone = (state: any) => state.creditCardSlice.phone;
export const selectStreet = (state: any) => state.creditCardSlice.street;
export const selectInstallments = (state: any) => state.creditCardSlice.installments;

export const creditCardReducer = creditCardSlice.reducer;