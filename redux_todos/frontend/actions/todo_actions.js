export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import {receiveErrors} from './error_actions';
import {todoUtil, saveTodoUtil, updateTodoUtil, deleteTodoUtil} from '../util/todo_api_util';
export const receiveTodos = todos => ({
  // debugger
    type: RECEIVE_TODOS,
    todos
});

export const receiveTodo = todo => ({
  // debugger
    type: RECEIVE_TODO,
    todo
});

export const removeTodo = todo => ({
  // debugger
    type: REMOVE_TODO,
    todo
});
export const fetchTodos = () => dispatch => (
  todoUtil().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => (
  saveTodoUtil(todo).then(todos => dispatch(receiveTodo(todos)),
            err => dispatch(receiveErrors(err.responseJSON)))
  );

export const updateTodo = (todo) => dispatch => (
  updateTodoUtil(todo).then(todos => dispatch(receiveTodo(todos)),
            err => dispatch(receiveErrors(err.responseJSON)))
  );

export const deleteTodo = (todo) => dispatch => (
  deleteTodoUtil(todo).then(todos => dispatch(removeTodo(todos)),
            err => dispatch(receiveErrors(err.responseJSON)))
  );
