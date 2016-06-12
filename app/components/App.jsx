import React from 'react';
import Customers from '../containers/Customers';
import Appbar from './Appbar';
import FloatingAddButton from '../containers/FloatingAddButton';
import AddCustomer from '../containers/AddCustomer';
import Paper from 'material-ui/Paper';

/*
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);
*/
const style = {
  paddingLeft: '10%',
  paddingRight: '10%',
};

const App = () => (
  <div>
    <Appbar />
    <Customers />
    <AddCustomer />
    <FloatingAddButton />
  </div>
);

export default App;
