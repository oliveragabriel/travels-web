import { actions } from './actions/actions';

export const initialState = {
  action: '',
  showModal: {
    login: false,
    forgetPassword: false,
    addNewUser: false,
    myPerfil: false,
    changePassword: false,
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
  console.log(state)
  switch (action.type) {
    case actions.controlShowModalLogin:
      return { 
        ...state,
        showModal: { 
          ...state.showModal,
          login: action.payload, 
          forgetPassword: false,
          addNewUser: false
        }
      };
    case actions.controlShowModalForgetPassword:
      return { 
        ...state,
        showModal: { 
          ...state.showModal,
          forgetPassword: action.payload,
          addNewUser: false
        }
      };
    case actions.controlShowModalAddNewUser:
      return { 
        ...state,
        showModal: { 
          ...state.showModal,
          forgetPassword: false,
          addNewUser: action.payload
        }
      };
    case actions.controlShowModalMyPerfil:
      return { 
        ...state,
        showModal: {
          ...state.showModal,
          myPerfil: action.payload
        } 
      };
    case actions.controlShowModalChangePassword:
      return { 
        ...state,
        showModal: {
          ...state.showModal,
          addNewContact: false,
          addNewAdress: false,
          changePassword: action.payload
        } 
      };
    case actions.controlShowModalAddNewAdress:
      return { 
        ...state,
        showModal: {
          ...state.showModal,
          changePassword: false,
          addNewContact: false,
          addNewAdress: action.payload
        }
      };     
    case actions.controlShowModalAddNewContact:
      return { 
        ...state,
        showModal: {
          ...state.showModal,
          changePassword: false,  
          addNewAdress: false,
          addNewContact: action.payload 
        }
      };
    case actions.setLoggedUserData:
      return { 
        ...state,
        user: action.payload 
      };
    case actions.setActionForTitle:
      return { 
        ...state,
        action: action.payload 
      };
    case actions.setEditingAdress:
      return {
        ...state,
        editing: { 
          ...state.editing,
          adress: action.payload
        }
      }
    case actions.setEditingContact:
      return {
        ...state,
        editing: { 
          ...state.editing,
          contact: action.payload
        }
      }
    case actions.setInitialStateObject:
      return {
        ...initialState,
        showModal: { 
          login: false,
          forgetPassword: false,
          addNewUser: false,
          myPerfil: true,
          changePassword: false,
          addNewAdress: false,
          addNewContact: false,
         },
        user: { ...state.user },
      };
    case actions.toogleEditAdress:
      return {
        ...state,
        action: 'edit',
        showModal: { 
          login: false,
          forgetPassword: false,
          addNewUser: false,
          myPerfil: true,
          changePassword: false,
          addNewAdress: true,
          addNewContact: false,
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
          login: false,
          forgetPassword: false,
          addNewUser: false,
          myPerfil: true,
          changePassword: false,
          addNewAdress: false,
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
          login: false,
          forgetPassword: false,
          addNewUser: false,
          myPerfil: true,
          changePassword: false,
          addNewAdress: false,
          addNewContact: true,
        },
      };
    case actions.toogleAddNewAdress:
      return { 
        ...state,
        action: 'register',
        showModal: { 
          login: false,
          forgetPassword: false,
          addNewUser: false,
          myPerfil: true,
          changePassword: false,
          addNewAdress: true,
          addNewContact: false,
        },
      };
    default:
      return state;
  }
};