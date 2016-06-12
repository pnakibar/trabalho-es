import React from 'react';
import Customers from '../containers/Customers';
import Appbar from './Appbar';

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
  </div>
);

export default App;
