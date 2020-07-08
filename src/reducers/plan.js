import { PLANS_LOADED, PLAN_PURCHASED, PURCHASING_PLAN_FAILED, PURCHASING_PLAN  } from './../constants/actionTypes';

const defaultState = {
  active: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PLAN_PURCHASED:
    case PLANS_LOADED:
      return {
        ...state,
        active: action.payload
      };
    case PURCHASING_PLAN_FAILED:
      return {
        ...state,
        fetching: false
      }
    case PURCHASING_PLAN:
      return {
        ...state,
        fetching: true
      }
    // case PLAN_PURCHASED:
    //   return {
    //     ...state,
    //     active: state.active.concat(action.payload)
    //   }
    default:
      return state;
  }
}