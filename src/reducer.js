import { combineReducers } from 'redux';
import common from './reducers/common';
import modal from './reducers/modal';
// import auth from './reducers/auth';
import wallet from './reducers/wallet';
import profile from './reducers/profile';
import plan from './reducers/plan';
import game from './reducers/game';
import categories from './reducers/category';
import leaders from './reducers/leaders'
import { connectRouter } from 'connected-react-router';

const appReducer =  (history) => combineReducers({
  router: connectRouter(history),
  common,
  modal,
  wallet,
  profile,
  plan,
  game,
  categories,
  leaders,
});

export default appReducer;