import React from 'react';
import { connect } from 'react-redux';
import todoActions from '../../redux/todos/todos-actions';
import cN from 'classnames';
import Todo from './TodoItem';
import './TodosStyles.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => {
        return (
          <li
            key={id}
            className={cN('TodoList__item', {
              'TodoList__item--completed': completed,
            })}
          >
            <Todo
              // id={id}
              text={text}
              completed={completed}
              onToggleCompleted={() => onToggleCompleted(id)}
              onDelete={() => onDeleteTodo(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

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
  onDeleteTodo: id => dispatch(todoActions.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todoActions.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
