import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addSearchCache: (state, action) => {
      state = { ...action.payload, ...state };
    },
  },
});
export const { addSearchCache } = searchSlice.actions;
export default searchSlice.reducer;
