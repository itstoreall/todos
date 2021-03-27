import React from 'react';
import { connect } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import { TextField } from '@material-ui/core';
import './TodosStyles.scss';

const TodoFilter = ({ value, onChange }) => {
  return (
    <label className="TodoFilter-label">
      <TextField
        type="text"
        className="TodoInput"
        value={value}
        onChange={onChange}
        id="outlined-basic"
        label="Filter by name"
        // variant="outlined"
      />
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.todos.filter,
});

const mapDispatchtoProps = dispatch => ({
  onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(TodoFilter);
