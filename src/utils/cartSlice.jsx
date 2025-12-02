import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },

  reducers: {

    addItem: (state, action) => {
      const product = action.payload;

      // check if item already in cart
      const existing = state.items.find((i) => i.id === product.id);

      if (existing) {
        existing.qty += 1;  // increase quantity
      } else {
        state.items.push({ ...product, qty: 1 }); // first time
      }
    },

    clearCart: (state) => {
      state.items = []
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },

    decreaseQty: (state, action) => {
  const item = state.items.find((i) => i.id === action.payload);
  if (item && item.qty > 1) {
    item.qty -= 1;
  }
},
  },
});

export const { addItem, clearCart, removeItem, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;