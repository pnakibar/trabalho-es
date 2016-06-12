const { List, Map } = require('immutable');
// const Immutable = require('immutable')
import { ADD_CUSTOMER, ADD_CUSTOMER_DIALOG_TOGGLE } from './actions';
import { combineReducers } from 'redux-immutable';
/*
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: List.of(),
};
*/

import customers from './mockup';
function customersReducer(state = customers, action) {
  switch (action.type) {
    case ADD_CUSTOMER:
      return state.push(Map(action.customer));
    default:
      return state;
  }
}
const generalUI = Map({
  addCustomerDialog: false,
});

function generalUIReducer(state = generalUI, action) {
  console.log(action);
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
