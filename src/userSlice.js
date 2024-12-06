import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
  ],
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
