import { loggedUserActions } from './actions'

export const loggedUserInitialState = { 
    username: '',
    token: ''
}

export function loggedUserReducer(state, action) {
  switch (action.type) {
    case loggedUserActions.userLogIn:
      return action.payload
    case loggedUserActions.userLogOut:
      return action.payload
    default:
      return state
  }
}