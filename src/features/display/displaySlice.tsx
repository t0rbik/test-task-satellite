import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
  name: "display",
  initialState: {
    isLoading: false,
  },
  reducers: {
    loading: (state, action: { type: string; payload: string }) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { loading } = displaySlice.actions;

export default displaySlice.reducer;
