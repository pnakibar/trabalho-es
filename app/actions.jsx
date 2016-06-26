/*
  Action Types
 */
import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const RETRIEVE_CUSTOMERS = 'RETRIEVE_CUSTOMERS';
export const SET_CUSTOMERS = 'SET_CUSTOMERS';

export function setCustomers(customers) {
  return {
    type: SET_CUSTOMERS,
    customers,
  };
}

export function retrieveCustomers() {
  return (dispatch) => {
    axios.get('/customers')
      .then(({ data }) => {
        return dispatch(setCustomers(data));
      });
  };
}

export function addCustomer(customer) {
  return {
    type: ADD_CUSTOMER,
    customer,
  };
}



export const ADD_CUSTOMER_DIALOG_TOGGLE = 'ADD_CUSTOMER_DIALOG_TOGGLE';

export function addCustomerDialogToggle() {
  return {
    type: ADD_CUSTOMER_DIALOG_TOGGLE,
  };
}

/*
  Other Constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/*
  Action Creators
 */

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}
