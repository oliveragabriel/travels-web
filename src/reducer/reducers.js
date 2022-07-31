import { createSlice } from "@reduxjs/toolkit";

export const loggedUserInitialState = {
    username: '',
    token: '',
    isLogged: false,
}

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState: loggedUserInitialState,
    reducers: {
        userLogIn: (state, action) => {
            state = action.payload
        },
        userLogOut: (state) => {
            state = loggedUserInitialState
        }
    },
})

export const { userLogIn, userLogOut } = loggedUserSlice.actions

export default loggedUserSlice.reducer