import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  obj: localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : "",
};
export const getObjectSlice = createSlice({
  name: "obj",
  initialState,
  reducers: {
    getObj: (state, action) => {
      state.obj = localStorage.setItem(
        "product",
        JSON.stringify(action.payload)
      );
    },
  },
});

export const { getObj } = getObjectSlice.actions;
export default getObjectSlice.reducer;
