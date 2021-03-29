import { connect } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
import todosSelectors from '../../redux/todos/todos-selectors';
import TodoList from './TodoList';

// const getVisibleTodos = (allTodos, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allTodos.filter(({ text }) =>
//     text.toLowerCase().includes(normalizedFilter),
//   );
// };

const mapStateToProps = state => ({
  todos: todosSelectors.getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosOperations.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todosOperations.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
