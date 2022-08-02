import { configureStore } from '@reduxjs/toolkit'
import loggedUserSlice from "../reducers/loggedUserSlice"
import selectedTravelSlice from '../reducers/selectedTravelSlice'
import selectedTravelDaySlice from '../reducers/selectedTravelDaySlice'

export default configureStore({
  reducer: {
    loggedUser: loggedUserSlice,
    selectedTravel: selectedTravelSlice,
    selectedTravelDay: selectedTravelDaySlice,
  },
})