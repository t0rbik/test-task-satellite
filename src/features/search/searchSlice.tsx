import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type Loader = "not loading" | "loading" | "success" | "failed";
interface SearchState {
    searchWord: string,
    dataWord: Array<any> | null,
    isLoading: Loader;
}

const initialState: SearchState = {
    searchWord: "",
    dataWord: null,
    isLoading: 'not loading',
}

export const getDataWord = createAsyncThunk('search/getDataWord', async (word: string | undefined) => {
    try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if(!response.ok) {
            throw new Error('response not 200')
        }
        return (await response.json());
    } catch (e) { //catch close type MUST BE any or unknown if specified so I'm not specifying
        console.log(e);
        return Promise.reject();
    }
})

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    newSearchWord: (state, action: PayloadAction<string>) => {
      state.searchWord = action.payload;
      return state;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getDataWord.pending, (state, action) => {
        state.isLoading = 'loading';
        return state;
      })
      .addCase(getDataWord.fulfilled, (state, action) => {
        state.isLoading = 'success';
        state.dataWord = action.payload;
        return state;
      })
      .addCase(getDataWord.rejected, (state, action) => {
        state.isLoading = 'failed';
        state.dataWord = null;
        return state;
      })
  }
});

const SearchReducer = searchSlice.reducer;
export const { newSearchWord } = searchSlice.actions;
export default SearchReducer;
