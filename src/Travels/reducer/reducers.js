import { actions } from './actions/actions';

export const initialState = {
  action: '',
  showModal: {
    addNewTrip: false,
  },
  editing: {},
  user: {
    username: '',
    travels: {
      nextTravels: [],
      previousTravels: [],
    }
  }
};

export function travelsReducer(state, action) {
  switch (action.type) {
    case actions.setLoggedUserData:
      return { 
        ...state,
        user: action.payload
      };
    case actions.setInitialStateObject:
      return {
        ...initialState,
        user: { 
          ...state.user, 
        }
      }
    case actions.controlShowModalAddNewTrip:
      return {
        ...state,
        showModal: {
          addNewTrip: action.payload,  
        }
      }
    case actions.toogleAddNewTrip:
      return {
        ...state,
        action: 'register',
        showModal: {
          addNewTrip: true,
        }
      }
    case actions.toogleEditTrip:
      return {
        ...state,
        action: 'edit',
        showModal: {
          addNewTrip: true,
        }
      }
    default:
      return state;
  }
};