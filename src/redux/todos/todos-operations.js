import axios from 'axios';
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
} from './todos-actions';

axios.defaults.baseURL = 'http://localhost:2222';

const fetchTodos = dispatch => {
  dispatch(fetchTodosRequest());

  axios
    .get('/todos')
    .then(({ data }) => dispatch(fetchTodosSuccess(data)))
    .catch(error => dispatch(fetchTodosError(error)));
};

// Add Todo
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

// Delete Todo
const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error)));
};

// Toggle Completed
const toggleCompleted = ({ id, completed }) => dispatch => {
  const update = { completed };

  dispatch(toggleCompletedRequest());

  axios
    .patch(`/todos/${id}`, update)
    .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
    .catch(error => dispatch(toggleCompletedError(error)));
};

/* eslint-disable */
export default { fetchTodos, addTodo, deleteTodo, toggleCompleted };
