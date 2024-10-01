import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showSideBar: true,
    videos: [],
    video: null,
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
  },
});
export const { setShowSideBar, setVideos, setVideo } = appSlice.actions;
export default appSlice.reducer;
