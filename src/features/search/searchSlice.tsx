import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchWord: "",
  },
  reducers: {
    newSearchWord: (state, action: { type: string; payload: string }) => {
      state.searchWord = action.payload;
    },
  },
});

export const { newSearchWord } = searchSlice.actions;

export default searchSlice.reducer;
