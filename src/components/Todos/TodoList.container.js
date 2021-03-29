import { connect } from 'react-redux';
import { todosOperations, todosSelectors } from '../../redux/todos';
import TodoList from './TodoList';

const mapStateToProps = state => ({
  todos: todosSelectors.getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosOperations.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todosOperations.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
