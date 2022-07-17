import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store"

type Loader = "not loading" | "loading" | "success" | "failed";
interface SearchState {
    searchWord: string,
    dataWord: object | null,
    isLoading: Loader;
}

const initialState: SearchState = {
    searchWord: "",
    dataWord: null,
    isLoading: 'not loading',
}

export const getDataWord = createAsyncThunk< //I need this to define the type of getState()
// Return type of the payload creator
object,
// First argument to the payload creator
string,
{
  // Optional fields for defining thunkApi field types
  dispatch: AppDispatch
  state: RootState
  extra: {
    jwt: string
  }
}
>('search/getDataWord', async (word) => {
    try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        return (await response.json());
    } catch (e) { //catch close type MUST BE any or unknown if specified so I'm not specifying
        return 'some problem occured'
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
      .addCase(getDataWord.pending, (state) => {
        state.isLoading = 'loading';
        return state;
      })
      .addCase(getDataWord.fulfilled, (state, action) => {
        state.isLoading = 'success';
        state.dataWord = action.payload;
        return state;
      })
      .addCase(getDataWord.rejected, (state) => {
        state.isLoading = 'failed';
        state.dataWord = null;
        return state;
      })
  }
});

const SearchReducer = searchSlice.reducer;
export const { newSearchWord } = searchSlice.actions;
export default SearchReducer;
