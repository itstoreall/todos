import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import todosReducer from './todos/todos-reducer';

console.log(getDefaultMiddleware());

// const middleware = [...getDefaultMiddleware(), logger]; // logger

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  // middleware, // logger
  devTools: process.env.NODE_ENV === 'development', // hide Devtools
});

export default store;
