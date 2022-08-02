import { createSlice } from "@reduxjs/toolkit";

export const selectedTravelSlice = createSlice({
    name: 'selectedTravel',
    initialState: {
    },
    reducers: {
        setSelectedTravel: (state, action) => {
            return action.payload
        },
        cleanSelectedTravel: (state) => {
            return null
        }
    },
})

export const { setSelectedTravel, cleanSelectedTravel } = selectedTravelSlice.actions

export default selectedTravelSlice.reducer