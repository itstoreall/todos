import React from 'react';
import classNames from 'classnames';
import TodoItem from './TodoItem';
import './TodosStyles.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => {
        return (
          <li
            key={id}
            className={classNames('TodoList__item', {
              'TodoList__item--completed': completed,
            })}
          >
            <TodoItem
              text={text}
              completed={completed}
              onToggleCompleted={() =>
                onToggleCompleted({ id, completed: !completed })
              }
              onDelete={() => onDeleteTodo(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
