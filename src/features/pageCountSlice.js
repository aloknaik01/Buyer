import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};
export const pageCountSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    incPage: (state) => {
      state.page = state.page + 1;
    },
    decPage: (state) => {
      state.page = state.page - 1;
    },
  },
});

export const { incPage, decPage } = pageCountSlice.actions;
export default pageCountSlice.reducer;
