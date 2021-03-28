import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import Checkbox from '@material-ui/core/Checkbox';
import './TodosStyles.scss';

const TodoItem = ({ text, completed, onToggleCompleted, onDelete }) => {
  return (
    <>
      <label>
        <Checkbox
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={onToggleCompleted}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </label>
      <p className="TodoList__text">{text}</p>
      <IconButton
        type="button"
        className="TodoList__btn"
        onClick={onDelete}
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
