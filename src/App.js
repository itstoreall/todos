import React from 'react';
import Todos from './components/Todos';
import './components/Todos/TodosStyles.scss';
import shortid from 'shortid';

const App = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Todos View Redux</h1>
        <Todos />

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
        </ul>
      </div>
    </section>
  );
};

export default App;
