import { CATEGORIES_LOADED  } from './../constants/actionTypes';

const defaultState = {
  list: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CATEGORIES_LOADED:
      return {
        ...state,
        list : action.payload
      }
    default:
      return state;
  }
}