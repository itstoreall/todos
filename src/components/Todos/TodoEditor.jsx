import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
import { Button, TextField } from '@material-ui/core';

export default function TodoEditor({ onCloseModal }) {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (message !== '') {
      dispatch(todosOperations.addTodo(message));
      onCloseModal();
      setMessage('');
      return;
    }

    alert('Заполни текст Todo');
  };

  return (
    <form className="TodoEditor" onSubmit={handleSubmit}>
      <label className="TodoEditor__textarea-label">
        <TextField
          className="TodoEditor__textarea"
          value={message}
          onChange={handleChange}
          id="outlined-multiline-static"
          label="Todo text"
          multiline
          rows={2}
          // defaultValue="Default Value"
          variant="outlined"
          inputRef={inputRef}
        />
      </label>
      <Button
        className="TodoEditor__btn"
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
