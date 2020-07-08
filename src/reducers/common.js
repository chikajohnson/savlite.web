import {
  APP_LOAD, REDIRECT, SHOW_MODAL, HIDE_MODAL, LOGOUT, RELOAD_APP, TOGGLE_MENU, IS_MOBILE, MOBILE_WIDTH, USER_LOADED,
  USER_LOGIN_FAILED, USER_LOGGING_IN, USER_LOGGED_IN, USER_REGISTERING_FAILED, USER_REGISTERED, USER_REGISTERING,
  HIDE_GLOBAL_HEADER, SHOW_GLOBAL_HEADER, MODEL_CREATION_FAILED, ERROR_MESSAGE_CLEARED, REQUEST_FETCHING, REQUEST_FETCHED
} from './../constants/actionTypes';

const defaultState = {
  isMenuOpen: false,
  useLiteClient: false,
  isMobile: window.innerWidth <= MOBILE_WIDTH,
  useGlobalHeader: true,
  // currentUser: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        error: null
      };
    case REQUEST_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case REQUEST_FETCHED:
      return {
        ...state,
        fetching: false
      }
    case USER_LOADED:
    case USER_REGISTERED:
    case USER_LOGGED_IN:
      return {
        ...state,
        currentUser: action.user ? action.user : null,
        error: null,
        fetching: false,
      };
    case MODEL_CREATION_FAILED:
    case USER_REGISTERING_FAILED:
    case USER_LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        fetching: false,
      };
    case USER_REGISTERING:
    case USER_LOGGING_IN:
      return {
        ...state,
        fetching: true
      }
    case ERROR_MESSAGE_CLEARED:
      return {
        ...state,
        error: null
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case SHOW_MODAL:
      return { ...state, redirectTo: null };
    case RELOAD_APP:
      return { ...state, reload: false };
    case HIDE_MODAL:
      return { ...state, redirectTo: null };
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: action.open }
    case SHOW_GLOBAL_HEADER:
      return { ...state, useGlobalHeader: true }
    case HIDE_GLOBAL_HEADER:
      return { ...state, useGlobalHeader: false }
    case LOGOUT:
      return { ...state, currentUser: null, isMenuOpen: false };
    case IS_MOBILE:
      return { ...state, isMobile: action.mobileSize };
    default:
      return state;
  }
}