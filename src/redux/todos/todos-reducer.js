import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actions from './todos-actions';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodo,
  changeFilter,
  toggleCompleted,
} from './todos-actions';

// Items
const items = createReducer([], {
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [toggleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
  [deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// Loading
const loading = createReducer(false, {
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
});

// Filter
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, loading });

/* ================================================
// ** Sync (completed module)

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions';

const items = createReducer([], {
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.toggleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
  [actions.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });

// ------------------------------------------------- */
