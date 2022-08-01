import { createSlice } from "@reduxjs/toolkit";

export const selectedTravelSlice = createSlice({
    name: 'selectedTravel',
    initialState: {
        travel: null
    },
    reducers: {
        setSelected: (state, action) => {
            return action.payload
        },
        cleanSelected: (state) => {
            return null
        }
    },
})

export const { setSelected, cleanSelected } = selectedTravelSlice.actions

export default selectedTravelSlice.reducer