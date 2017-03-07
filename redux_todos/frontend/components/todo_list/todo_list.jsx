import React, { PropTypes } from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(todo, e) {
    console.log(this);
    this.props.removeTodo(todo);
  }

  render () {
    return (
      <div className='content'>
        <h2>Todo Items</h2>
        <ul>
          {
            this.props.todos.map((todo, i) => (
              <li key={i}><TodoListItem todo={todo} />
                // <form>
                //   <button onSubmit={this.deleteTodo(todo)}>Delete</button>
                // </form>
              </li>
            ))
          }
        </ul>
        <TodoForm props={this.props}/>
      </div>
    );
  }
}

export default TodoList;
