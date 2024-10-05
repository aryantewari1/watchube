import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";
import searchReducer from "./Slices/searchSlice";
import resultsReducer from "./Slices/resultsSlice";
const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    results: resultsReducer,
  },
});

export default appStore;
