import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slices/appSlice";
import searchReducer from "./Slices/searchSlice";
import resultsReducer from "./Slices/resultsSlice";
import commentsReducer from "./Slices/commentsSlice";
import liveChatReducer from "./Slices/LiveChatSlice";
const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    results: resultsReducer,
    commentsList: commentsReducer,
    liveChat: liveChatReducer,
  },
});

export default appStore;
