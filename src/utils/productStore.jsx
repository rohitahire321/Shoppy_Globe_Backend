import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import searchReducer from './searchSlice'

export const productStore = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
})