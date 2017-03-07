import { connect } from 'react-redux';
import { receiveTodos, receiveTodo, removeTodo } from '../../actions/todo_actions';

import allTodos from '../../reducers/selectors.js';
import TodoList from './todo_list.jsx';
import TodoForm from './todo_form';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => {
  return {
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
