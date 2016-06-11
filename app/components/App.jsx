import React from 'react';
import VisiblePhotos from '../containers/VisiblePhotos';

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
    <VisiblePhotos />
  </div>
);

export default App;
