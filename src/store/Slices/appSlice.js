import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showSideBar: true,
    videos: [],
    video: null,
    searchSuggestions: [],
  },
  reducers: {
    setShowSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setVideo: (state, action) => {
      state.video = action.payload;
    },
    setSearchSuggestions: (state, action) => {
      state.searchSuggestions = action.payload;
    },
  },
});
export const { setShowSideBar, setVideos, setVideo, setSearchSuggestions } =
  appSlice.actions;
export default appSlice.reducer;
