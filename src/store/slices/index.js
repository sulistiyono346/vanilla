import { createSlice } from "@reduxjs/toolkit";
import { handleSearch } from "./thunk";

const githubReducer = createSlice({
  name: "githubReducer",
  initialState: {
    mockEmpty: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    isLoading: false,
    apiData: {},
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    resetApiData: (state, action) => {
      state.apiData = {};
    },
  },
  extraReducers: {
    [handleSearch.pending]: (state) => {
      state.isLoading = true;
    },
    [handleSearch.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.apiData = payload;
    },
    [handleSearch.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});
export const { setIsLoading, resetApiData } = githubReducer.actions;
export default githubReducer.reducer;
