import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.get('id')}
        text={todo.get('text')}
        onClick={() => onTodoClick(todo.get('id'))}
      />
    )}
  </ul>
);


export default TodoList;
