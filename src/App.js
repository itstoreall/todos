import React from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import Todos from './components/Todos';
import todoSelectors from './redux/todos/todos-selectors';
import './components/Todos/TodosStyles.scss';

export default function App() {
  const isLoadingTodos = useSelector(todoSelectors.getLoading);

  return (
    <section className="section">
      <div className="container">
        <h1>
          Todos View Redux
          {isLoadingTodos && <span className="Loading"> Loading...</span>}
        </h1>
        <Todos />

        <ul className="UseList">
          <li>Hooks:</li>
          <li>useState</li>
          <li>useEffect</li>
          <li>useRef</li>
          <li>useCallback</li>
        </ul>

        <ul className="UseList">
          <li>use React - Prop Types</li>
          <li>use ESLint</li>
          <li>use Prettier</li>
          <li>use gh-pages</li>
          <li>use Modern normalize</li>
          <li>use Node Sass</li>
          <li>use React JSS</li>
          <li>use Redux</li>
          <li>use React Redux</li>
          <li>use Redux Devtools Extension</li>
          <li>use Material-UI</li>
          <li>use axios</li>
          <li>use Classnames</li>
          <li>use react-router-dom</li>
          <li>use shortid - id: {shortid.generate()}</li>
          <li>use Redux Toolkit</li>
          <li>use Logger for Redux</li>
          <li>use Redux Persist</li>
          <li>use JSON Server</li>
          <li>use Reselect (from Toolkit)</li>
        </ul>
      </div>
    </section>
  );
}
