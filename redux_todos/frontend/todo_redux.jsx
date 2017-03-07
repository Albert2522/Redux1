import React from 'react';
import ReactDOM from 'react-dom';
import allTodos from './reducers/selectors';
import configureStore from './store/store';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import App from './components/app';


import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;

  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  );

});
// window.allTodos = allTodos;
