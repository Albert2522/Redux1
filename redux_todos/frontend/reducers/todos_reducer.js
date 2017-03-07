import { RECEIVE_TODO } from '../actions/todo_actions.js';
import { RECEIVE_TODOS } from '../actions/todo_actions.js';
import { REMOVE_TODO } from '../actions/todo_actions.js';

import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};


export default todosReducer;
