import { actions } from './actions/actions';

export const initialState = {
  action: '',
  showModal: {
    addNewTrip: false,
  },
  editing: {},
  travels: {
    nextTravels: [],
    previousTravels: [],
  }
};

export function travelsReducer(state, action) {
  console.log(state)
  switch (action.type) {
    case actions.setLoggedUserData:
      return { 
        ...state,
        travels: action.payload
      };
    case actions.setInitialStateObject:
      return {
        ...initialState,
        travels: { 
          ...state.travels, 
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
        },
        editing: {}
      }
    case actions.toogleEditTrip:
      return {
        ...state,
        action: 'edit',
        showModal: {
          addNewTrip: true,
        },
        editing: action.payload
      }
    default:
      return state;
  }
};