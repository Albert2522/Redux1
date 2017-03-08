import { RECEIVE_TODO } from '../actions/todo_actions.js';
import { RECEIVE_TODOS } from '../actions/todo_actions.js';
import { REMOVE_TODO } from '../actions/todo_actions.js';
import { FETCH_TODOS } from '../actions/todo_actions.js';

import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODO:
      let anotherState = merge({}, state);
      anotherState[action.todo.id] = action.todo;
      return anotherState;
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach( (todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case REMOVE_TODO:
      let removeState = merge({}, state);
      delete removeState[action.todo.id];
      return removeState;
    case FETCH_TODOS:
      console.log('asdf');
    default:
      return state;
  }
};


export default todosReducer;
