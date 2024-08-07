import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  cost: 0,
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.cart.push(item);
      localStorage.setItem("cart", JSON.stringify([]));
    },

    clearCart: (state) => {
      state.cart = [];
    },
    removeItem: (state, action) => {
      state.cart = action.payload;
    },

    incCartCount: (state) => {
      state.count += 1;
    },
    decCartCount: (state) => {
      state.count = 0;
    },
  },
});

export const { addToCart, clearCart, incCartCount, decCartCount, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
