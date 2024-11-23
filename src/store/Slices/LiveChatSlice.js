import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    chats: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.chats.splice(10, 1);
      state.chats.unshift(action.payload);
    },
  },
});

export const { addChat } = LiveChatSlice.actions;
export default LiveChatSlice.reducer;
