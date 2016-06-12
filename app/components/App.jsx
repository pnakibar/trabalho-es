import React from 'react';
import Customers from '../containers/Customers';

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
  <div style={style}>
    <Customers />
  </div>
);

export default App;
