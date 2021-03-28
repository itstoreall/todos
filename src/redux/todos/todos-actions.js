import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));
const deleteTodo = createAction('todos/delete');
const changeFilter = createAction('todos/changeFilter');

export default { addTodo, deleteTodo, changeFilter }; // eslint-disable-line
