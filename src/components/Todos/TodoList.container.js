import { connect } from 'react-redux';
import { deleteTodo, toggleCompleted } from '../../redux/todos/todos-actions';
import TodoList from './TodoList';

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(deleteTodo(id)),
  onToggleCompleted: id => dispatch(toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
