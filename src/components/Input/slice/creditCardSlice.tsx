import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: ""
};

export const creditCardSlice = createSlice({
    name: "creditCard",
    initialState,
    reducers: {
        setCardNumber: (state, action: PayloadAction<string>) => {
            state.cardNumber = action.payload;
            console.log('state.cardNumber: ', state.cardNumber, state)
        },
        setCardHolder: (state, action: PayloadAction<string>) => {
            state.cardHolder = action.payload;
        },
        setExpirationDate: (state, action: PayloadAction<string>) => {
            let inputVal = action.payload.replace(/\D/g, '');
            if (inputVal.length > 2) {
                inputVal = inputVal.substring(0, 2) + '/' + inputVal.substring(2);
            }
            state.expirationDate = inputVal.substring(0, 5); // Limitar a 5 caracteres (MM/YY)
        },
        setCvv: (state, action: PayloadAction<string>) => {
            state.cvv = action.payload;
        }
    }
});


export const { setCardNumber, setCardHolder, setExpirationDate, setCvv } = creditCardSlice.actions;
export const selectCardNumber = (state: any) => state.creditCardSlice.cardNumber;
export const selectCardHolder = (state:any) => state.creditCardSlice.cardHolder;
export const selectExpirationDate = (state:any) => state.creditCardSlice.expirationDate;
export const selectCvv = (state:any) => state.creditCardSlice.cvv;
export const creditCardReducer = creditCardSlice.reducer;