import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";
import searchReducer from "./Slices/searchSlice";
const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
  },
});

export default appStore;
