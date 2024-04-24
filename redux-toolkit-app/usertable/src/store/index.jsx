import { configureStore } from '@reduxjs/toolkit';
import UserSlices from "./slices/UserSlices";

const store = configureStore({
  reducer: {
    users: UserSlices,
  },
});


console.log(store);

export default store;
