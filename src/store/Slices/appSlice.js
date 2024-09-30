import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showSideBar: true,
  },
  reducers: {
    setShowSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
  },
});
export const { setShowSideBar } = appSlice.actions;
export default appSlice.reducer;
