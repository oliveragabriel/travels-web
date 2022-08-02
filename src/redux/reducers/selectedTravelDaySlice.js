import { createSlice } from "@reduxjs/toolkit";

export const selectedTravelDaySlice = createSlice({
    name: 'selectedTravelDay',
    initialState: {
    },
    reducers: {
        setSelectedDay: (state, action) => {
            return action.payload
        },
        cleanSelectedDay: (state) => {
            return null
        }
    },
})

export const { setSelectedDay, cleanSelectedDay } = selectedTravelDaySlice.actions

export default selectedTravelDaySlice.reducer