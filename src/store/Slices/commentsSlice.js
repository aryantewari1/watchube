import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "commentsList",
  initialState: {
    comments: [
      {
        name: "notbasickk",
        text: "lorem ipsum something something",
        replies: [
          {
            name: "notbasickk",
            text: "lorem ipsum something something",
            replies: [
              {
                name: "notbasickk",
                text: "lorem ipsum something something",
                replies: [],
              },
            ],
          },
          {
            name: "notbasickk",
            text: "lorem ipsum something something",
            replies: [
              {
                name: "notbasickk",
                text: "lorem ipsum something something",
                replies: [
                  {
                    name: "notbasickk",
                    text: "lorem ipsum something something",
                    replies: [
                      {
                        name: "notbasickk",
                        text: "lorem ipsum something something",
                        replies: [
                          {
                            name: "notbasickk",
                            text: "lorem ipsum something something",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "notbasickk",
        text: "lorem ipsum something something",
        replies: [],
      },
      {
        name: "notbasickk",
        text: "lorem ipsum something something",
        replies: [],
      },
    ],
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.unshift(action.payload);
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
