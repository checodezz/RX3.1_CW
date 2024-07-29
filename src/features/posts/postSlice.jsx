import { createSlice } from "@reduxjs/toolkit";
export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        postId: "P001",
        caption: "Learning Redux Toolkit",
        likes: 22,
        user: {
          userId: "user123",
          userName: "John Doe",
        },
      },
      {
        postId: "P002",
        caption: "It is fun to learn redux toolkit",
        likes: 18,
        user: {
          userId: "user123",
          userName: "John Doe",
        },
      },
    ],
  },
  reducers: {},
});

export default postSlice.reducer;