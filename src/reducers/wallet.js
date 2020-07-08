import { WALLET_LOAD, WALLET_TRANSACTIONS_LOAD, PAYMENT_MADE, WALLET_LOADED, LOGOUT, BANKS_LOADED } from './../constants/actionTypes';

const defaultState = {
  bonus: 0.00,
  cash: 0.00,
  balance: 0.00,
  transactions: [],
  banks: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case WALLET_LOADED:
    case WALLET_LOAD:
      return {
        ...state,
        bonus: action.bonus,
        cash: action.cash,
        balance: action.balance,
      };
    case WALLET_TRANSACTIONS_LOAD:
      return {
        ...state,
        transactions: action.transactions
      };
    case PAYMENT_MADE:
      return {
        ...state,
        cash: Number(state.cash) + Number(action.amount),
        balance: Number(state.balance) + Number(action.amount)
      }
    case BANKS_LOADED:
      return {
        ...state,
        banks: action.banks
      }
    case LOGOUT:
      return {};
    default:
      return state;
  }
}