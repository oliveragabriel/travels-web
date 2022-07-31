import { configureStore } from '@reduxjs/toolkit'
import loggedUserSlice from "../reducer/reducers";

export default configureStore({
  reducer: {
    loggedUser: loggedUserSlice,
  },
})