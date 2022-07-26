import { actions } from './actions/actions';

export const initialState = {
  action: '',
  showModal: {
    addNewTrip: false,
    daysPlanning: false,
    addNewAcommodation: false,
    addNewTransport: false,
  },
  editing: {},
  travels: {
    nextTravels: [],
    previousTravels: [],
  }
};

export function travelsReducer(state, action) {
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
          ...state.showModal,
          addNewTrip: action.payload,  
        }
      }
    case actions.controlShowModalDaysPlanning:
      return {
        ...state,
        showModal: {
          ...state.showModal,
          daysPlanning: action.payload,  
        }
      }
    case actions.controlShowModalAddNewAcommodation:
      return {
        ...state,
        showModal: {
          ...state.showModal,
          addNewAcommodation: action.payload,  
        }
      }
    case actions.controlShowModalAddNewTransport:
      return {
        ...state,
        showModal: {
          ...state.showModal,
          addNewTransport: action.payload,  
        }
      }
    case actions.toogleAddNewTrip:
      return {
        ...state,
        action: 'register',
        showModal: {
          ...state.showModal,
          addNewTrip: true,
        },
        editing: {}
      }
    case actions.toogleEditTrip:
      return {
        ...state,
        action: 'edit',
        showModal: {
          ...state.showModal,
          addNewTrip: true,
        },
        editing: action.payload
      }
    default:
      return state;
  }
};