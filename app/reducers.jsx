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

let i = 0;

function todos(state = List.of(), action) {
  switch (action.type) {
    case ADD_TODO:
      return state.push(Map({ id: i++, text: action.text, completed: false }));
    case TOGGLE_TODO:
      return state.update(action.index, (t) => t.set('completed', !t.get('completed')));
    default:
      return state;
  }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
import pics from './mockup';
function picsReducer(state = pics) {
  return state;
}

const todoApp = combineReducers({
  pics: picsReducer,
  visibilityFilter,
  todos,
});

export default todoApp;
