import {
  SIGN_IN,
  SIGN_OUT,
  EDIT_USER,
  CREATE_USER,
  DELETE_USER,
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  firstName: null,
  lastName: null,
  userName: null,
  email: null,
  googleIcon: null,
  customIcon: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        fullName: action.payload.fullName,
        googleIcon: action.payload.googleIcon,
        email: action.payload.email,
      };

    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        firstName: null,
        lastName: null,
        fullName: null,
        googleIcon: null,
        email: null,
        customIcon: null,
      };

    default:
      return state;
  }
};
