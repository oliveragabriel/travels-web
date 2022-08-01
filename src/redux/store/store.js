import { configureStore } from '@reduxjs/toolkit'
import loggedUserSlice from "../reducers/loggedUserSlice";
import selectedTravelSlice from '../reducers/selectedTravelSlice';

export default configureStore({
  reducer: {
    loggedUser: loggedUserSlice,
    selectedTravel: selectedTravelSlice,
  },
})