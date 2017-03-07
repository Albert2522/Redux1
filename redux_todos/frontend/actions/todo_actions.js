export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

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
