import { connect } from 'react-redux';
import { receiveTodos, receiveTodo, createTodo } from '../../actions/todo_actions';

import allTodos from '../../reducers/selectors.js';
import TodoForm from './todo_form';
import errorsReducer from '../../reducers/error_reducer.js';


const mapStateToProps = state => ({
  todos: allTodos(state),

});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  createTodo: todo => dispatch(createTodo(todo))

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
