import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addSearchCache: (state, action) => {
      return { ...action.payload, ...state };
    },
    clearSearchCache: () => {
      return {};
    },
  },
});
export const { addSearchCache, clearSearchCache } = searchSlice.actions;
export default searchSlice.reducer;
