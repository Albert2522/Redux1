import { connect } from 'react-redux';
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';

import allTodos from '../../reducers/selectors.js';
import TodoForm from './todo_form';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
