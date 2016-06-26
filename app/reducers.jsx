// const { List, Map } = require('immutable');
import Immutable, { List, Map } from 'immutable';
// const Immutable = require('immutable')
import {
  ADD_CUSTOMER,
  ADD_CUSTOMER_DIALOG_TOGGLE,
  SET_CUSTOMERS,
} from './actions';
import { combineReducers } from 'redux-immutable';


const initialState = new Map({
  customers: new List([]),
});

function customersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CUSTOMER:
      return state.get('customers').push(new Map(action.customer));
    case SET_CUSTOMERS:
      return state.set('customers', Immutable.fromJS(action.customers));
    default:
      return state;
  }
}
const generalUI = Map({
  addCustomerDialog: false,
});

function generalUIReducer(state = generalUI, action) {
  switch (action.type) {
    case ADD_CUSTOMER_DIALOG_TOGGLE:
      return state.set('addCustomerDialog', !state.get('addCustomerDialog'));
    default:
      return state;
  }
}

const todoApp = combineReducers({
  customers: customersReducer,
  generalUI: generalUIReducer,
});

export default todoApp;
