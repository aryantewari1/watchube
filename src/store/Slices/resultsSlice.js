import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: [],
  reducers: {
    addResultsVideo: (state, action) => {
      return action.payload;
    },
  },
});

export const { addResultsVideo } = resultsSlice.actions;
export default resultsSlice.reducer;
