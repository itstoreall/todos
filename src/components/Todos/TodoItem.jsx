import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosOperations } from '../../redux/todos';
import { IconButton } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import Checkbox from '@material-ui/core/Checkbox';
import './TodosStyles.scss';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <>
      <label>
        <Checkbox
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={() =>
            dispatch(
              todosOperations.toggleCompleted({
                id,
                completed: !completed,
              }),
            )
          }
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </label>
      <p className="TodoList__text">{text}</p>
      <IconButton
        type="button"
        className="TodoList__btn"
        onClick={() => dispatch(todosOperations.deleteTodo(id))}
        disabled={!completed}
        color="primary"
        aria-label="delete todo"
        component="span"
      >
        <DeleteTwoToneIcon />
      </IconButton>
    </>
  );
};

export default TodoItem;
