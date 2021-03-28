import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import todosReducer from './todos/todos-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// localStorage
const todosPersistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    todos: persistReducer(todosPersistConfig, todosReducer),
  },
  middleware, // logger
  devTools: process.env.NODE_ENV === 'development', // hide Devtools
});

const persistor = persistStore(store);

export default { store, persistor }; // eslint-disable-line
