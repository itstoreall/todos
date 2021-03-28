import { connect } from 'react-redux';
import React from 'react';

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

const getCompletedCount = todos =>
  todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

const mapStateToProps = state => ({
  total: state.todos.items.length,
  completed: getCompletedCount(state.todos.items),
});

export default connect(mapStateToProps)(Stats);
