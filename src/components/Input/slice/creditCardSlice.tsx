import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

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
            state.expirationDate = action.payload;
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