import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categorySlice";
import cartSlice from "../features/cartSlice";
import inputSlice from "../features/inputSlice";
import pageCountSlice from "../features/pageCountSlice";
import getObjectSlice from "../features/getObject";


export const store = configureStore({
  reducer: {
    category: categorySlice,
    cart: cartSlice,
    query: inputSlice,
    page: pageCountSlice,
    obj: getObjectSlice,

  },
});
