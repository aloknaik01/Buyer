import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryList: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategoryList } = categorySlice.actions;
export default categorySlice.reducer;
