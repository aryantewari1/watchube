import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showSideBar: true,
    videos: [],
  },
  reducers: {
    setShowSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});
export const { setShowSideBar, setVideos } = appSlice.actions;
export default appSlice.reducer;
