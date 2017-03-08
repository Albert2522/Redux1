import { connect } from 'react-redux';
import { receiveTodos, receiveTodo, removeTodo, fetchTodos, createTodo, updateTodo, deleteTodo } from '../../actions/todo_actions';

import allTodos from '../../reducers/selectors.js';
import TodoList from './todo_list.jsx';
import TodoForm from './todo_form';
import TodoListItem from './todo_list_item';


const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => {
  return {
  fetchTodos: () => dispatch(fetchTodos()),
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  deleteTodo: todo => dispatch(deleteTodo(todo))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
