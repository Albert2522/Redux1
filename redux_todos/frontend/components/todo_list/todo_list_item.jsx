import React from 'react';
import allTodos from '../../reducers/selectors';
import TodoForm from './todo_form';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        {this.props.todo.title}
      </div>
    );
  }
}

export default TodoListItem;

// <form onSubmit={this.handleSubmit}>
//   <input
//     type='text'
//     onChange={this.updateCookie}
//     value={this.state.cookie}
//   />
//   <button>Delete Todo!</button>
// </form>
