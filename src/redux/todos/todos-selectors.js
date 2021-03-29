const getLoading = state => state.todos.loading;

const getFilter = state => state.todos.filter;

const getAllTodos = state => state.todos.items;

const getTotalTodoCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

const getCompletedCount = state => {
  const todos = getAllTodos(state);

  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
};

const getVisibleTodos = state => {
  const todos = getAllTodos(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return todos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

/* eslint-disable */
export default {
  getLoading,
  getFilter,
  getAllTodos,
  getTotalTodoCount,
  getCompletedCount,
  getVisibleTodos,
};
