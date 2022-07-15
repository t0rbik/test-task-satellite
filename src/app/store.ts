import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import displayReducer from "../features/display/displaySlice";

export const store = configureStore({
  reducer: { search: searchReducer, display: displayReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
