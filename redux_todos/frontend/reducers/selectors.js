const allTodos = (state) => {
  Object.freeze(state);
  const todoKeys = Object.keys(state.todos);
  let arr = [];
  for (let i = 0; i < todoKeys.length; i++) {
    let a = parseInt(todoKeys[i]);
    arr.push(state.todos[a]);
  }
  return arr;
};
export default allTodos;
