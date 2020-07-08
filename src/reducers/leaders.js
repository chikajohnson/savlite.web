import { LEADERS_LOADED, LEADERS_LOADING_FAILED, LEADERS_LOADING } from './../constants/actionTypes';

const defaultState = {
  // board: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LEADERS_LOADED:
      return {
        ...state,
        fetching: false,
        board: action.board,
        first: action.board ? action.board[0]:null,
        second: action.board ? action.board[1]:null,
        third: action.board ? action.board[2]:null,
      }
    case LEADERS_LOADING_FAILED:
      return {
        ...state,
        fetching: false,
      };
    case LEADERS_LOADING:
      return {
        ...state,
        fetching: true
      }
    default:
      return state;
  }
}