import { createSlice } from "@reduxjs/toolkit";

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState: {
        user: {},
        token: '',
        isLogged: false,
    },
    reducers: {
        userLogIn: (state, action) => {
            return action.payload
        },
        userLogOut: (state) => {
            return {
                user: {},
                token: '',
                isLogged: false,
            }
        }
    },
})

export const { userLogIn, userLogOut } = loggedUserSlice.actions

export default loggedUserSlice.reducer