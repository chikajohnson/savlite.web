import {
  GAME_PLAN_SELECTED,
  GAME_CATEGORY_SELECTED,
  GAME_STARTED,
  GAME_UNLOADED,
  GAME_ENDED,
  GAME_RESTARTED,
  LEADERS_LOADED,
  HIDE_GAME_SUMMARY_HEADER,
  SHOW_GAME_SUMMARY_HEADER,
  RANK_LOADED,
  LOGOUT
} from "../constants/actionTypes";

const defaultState = {
  plan: null,
  category: null,
  started: false,
  ended: false,
  session: {},
  useGameSummaryHeader: false,
};

const unloadedState = {
  plan: null,
  category: null,
  started: false,
  ended: false,
  session: {},
  useGameSummaryHeader: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GAME_PLAN_SELECTED:
      return {
        ...state,
        plan: action.payload
      };
    case GAME_CATEGORY_SELECTED:
      return {
        ...state,
        category: action.payload
      };
    case GAME_STARTED:
      return {
        ...state,
        started: true,
        session: action.payload
      };
    case GAME_ENDED:
      return {
        ...state,
        started: false,
        ended: true,
        session: action.game,
      };
    case GAME_RESTARTED:
      return {
        ...state,
        started: false,
        ended: false,
        session: {},
        plan: null,
        category: null,
      };
    case LEADERS_LOADED:
      return {
        ...state,
        leaders: action.leaders,
      };
    case RANK_LOADED:
      return {
        ...state,
        rank: action.rank,
      };
    case LOGOUT:
      return defaultState
    case GAME_UNLOADED:
      return {
        ...state,
        ...unloadedState
      };
    case HIDE_GAME_SUMMARY_HEADER:
      return {
        ...state,
        useGameSummaryHeader: false,
      };
    case SHOW_GAME_SUMMARY_HEADER:
      return {
        ...state,
        useGameSummaryHeader: true,
      };
    default:
      return state;
  }
}