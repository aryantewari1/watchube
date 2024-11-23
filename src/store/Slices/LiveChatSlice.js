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
    removeChat: (state) => {
      state.chats.length = 0;
    },
  },
});

export const { addChat, removeChat } = LiveChatSlice.actions;
export default LiveChatSlice.reducer;
