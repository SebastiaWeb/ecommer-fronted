import { configureStore } from '@reduxjs/toolkit'
import { creditCardReducer } from '../components/Input/slice/creditCardSlice'

export const store = configureStore({
  reducer: {
    // Add your reducers here
    // Example: user: userReducer
    creditCardSlice: creditCardReducer,
  }
});