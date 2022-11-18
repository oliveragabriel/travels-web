import { createSlice } from '@reduxjs/toolkit'

export const selectedTravelDaySlice = createSlice({
  name: 'selectedTravelDay',
  initialState: {
  },
  reducers: {
    setSelectedDay: (state, action) => action.payload,
    cleanSelectedDay: (state) => null
  },
})

export const { setSelectedDay, cleanSelectedDay } = selectedTravelDaySlice.actions

export default selectedTravelDaySlice.reducer