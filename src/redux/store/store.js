import { configureStore } from '@reduxjs/toolkit'
import loggedUserSlice from "../reducer/loggedUserSlice";
import selectedTravelSlice from '../reducer/selectedTravelSlice';

export default configureStore({
  reducer: {
    loggedUser: loggedUserSlice,
    selectedTravel: selectedTravelSlice,
  },
})