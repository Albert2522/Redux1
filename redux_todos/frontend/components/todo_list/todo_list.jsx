import React, { PropTypes } from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import {todoUtil} from "../../util/todo_api_util";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.deletesTodo = this.deletesTodo.bind(this);
    this.logSomething = this.logSomething.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  deletesTodo(todo, e) {
    console.log("HERERE");
    console.log(todo);
    this.props.deleteTodo(todo);
  }

  updateTodo(todo, e) {
    this.props.updateTodo(todo);
  }

  logSomething(e) {
    console.log(e.target);
    console.log("here");
  }

  render () {
    return (
      <div className='content'>
        <h2>Todo Items</h2>
        <ul>
          {
            this.props.todos.map((todo, i) => (
              <div key={i}>
                <li>
                  <TodoListItem todo={todo} />
                </li>
                <button onClick={this.updateTodo.bind(this, todo)}>Update</button>
                <button onClick={this.deletesTodo.bind(this, todo)}>Delete</button>
              </div>
            ))
          }
        </ul>
        <TodoForm props={this.props}/>
      </div>
    );
  }
}

export default TodoList;
