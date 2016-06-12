const { List, Map } = require('immutable');
// const Immutable = require('immutable')
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './actions';
import { combineReducers } from 'redux-immutable';
/*
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: List.of(),
};
*/

import customers from './mockup';
function customersReducer(state = customers) {
  return state;
}

const todoApp = combineReducers({
  customers: customersReducer,
});

export default todoApp;
