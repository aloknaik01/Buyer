import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

export const inputSlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = inputSlice.actions;
export default inputSlice.reducer;
