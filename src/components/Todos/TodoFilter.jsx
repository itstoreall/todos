import React, { useEffect, useRef } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { changeFilter, todosSelectors } from '../../redux/todos';
import { TextField } from '@material-ui/core';
import './TodosStyles.scss';

// const mapStateToProps = state => ({
//   value: todosSelectors.getFilter(state),
// });

// const mapDispatchtoProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchtoProps)(TodoFilter);

const TodoFilter = ({ onChange }) => {
  // const dispatch = useDispatch();
  const filterRef = useRef();
  const value = useSelector(todosSelectors.getFilter);

  useEffect(() => {
    filterRef.current.focus();
  });

  return (
    <label className="TodoFilter-label">
      <TextField
        type="text"
        className="TodoInput"
        value={value}
        onChange={onChange}
        id="outlined-basic"
        label="Filter by name"
        inputRef={filterRef}
        // variant="outlined"
      />
    </label>
  );
};

const mapDispatchtoProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(null, mapDispatchtoProps)(TodoFilter);
