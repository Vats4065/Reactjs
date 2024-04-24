import { createSlice } from "@reduxjs/toolkit";

const UserSlices = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      state.splice(action.payload, 1);
    },
    clearAllUsers: (state, action) => {
     return [];
    },
  },
});

console.log(UserSlices.actions);
export default UserSlices.reducer;

export const { addUser, removeUser, clearAllUsers } = UserSlices.actions;
