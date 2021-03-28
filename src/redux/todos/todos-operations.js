import axios from 'axios';
import { addTodoRequest, addTodoSuccess, addTodoError } from './todos-actions';

axios.defaults.baseURL = 'http://localhost:2222';

const addTodo = text => dispatch => {
  const todo = {
    text,
    completed: false,
  };

  // Start (sync)
  dispatch(addTodoRequest());

  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

/* eslint-disable */
export default { addTodo };
