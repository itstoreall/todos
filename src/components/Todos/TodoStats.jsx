import { connect } from 'react-redux';
import todosSelectors from '../../redux/todos/todos-selectors';

const Stats = ({ total, completed }) => {
  return (
    <div>
      <p>
        <span>Total: {total}</span>
      </p>
      <p>
        <span>Completed: {completed}</span>
      </p>
    </div>
  );
};

// const getCompletedCount = todos =>
//   todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

const mapStateToProps = state => ({
  total: todosSelectors.getTotalTodoCount(state),
  completed: todosSelectors.getCompletedCount(state),
});

export default connect(mapStateToProps)(Stats);
