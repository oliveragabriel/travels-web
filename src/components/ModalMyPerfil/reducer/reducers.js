import { actions } from './actions/actions';

export const initialState = {
  action: '',
  showModal: {
    addNewAdress: false,
    addNewContact: false,
  },
  editing: {
    contact: {},
    adress: {}
  },
  user: {
    username: '',
    birth: null,
    nacionality: '',
    hometown: '',
    contacts: [],
    adresses: [],
    travels: {
      nextTravels: [],
      previousTravels: [],
    }
  }
};

export function headerReducer(state, action) {
  switch (action.type) {
    case actions.setLoggedUserData:
      return { 
        ...state,
        user: action.payload 
      };
    case actions.setInitialStateObject:
      return {
        ...initialState,
        showModal: {
          ...initialState.showModal,
          myPerfil: true,
         },
        user: { ...state.user },
      };
    case actions.toogleEditAdress:
      return {
        ...state,
        action: 'edit',
        showModal: {
          ...state.showModal,
          myPerfil: true,
          addNewAdress: true,
        },
        editing: { 
          contact: {},
          adress: action.payload
        }
      };
    case actions.toogleEditContact:
      return {
        ...state,
        action: 'edit',
        showModal: {
          ...state.showModal,
          myPerfil: true,
          addNewContact: true,
        },
        editing: { 
          adress: {},
          contact: action.payload
        }
      };
    case actions.toogleAddNewContact:
      return { 
        ...state,
        action: 'register',
        showModal: {
          ...state.showModal,
          myPerfil: true,
          addNewContact: true,
        },
      };
    case actions.toogleAddNewAdress:
      return { 
        ...state,
        action: 'register',
        showModal: {
          ...state.showModal,
          myPerfil: true,
          addNewAdress: true,
        },
      };
    default:
      return state;
  }
};