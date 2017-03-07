import React from 'react';
import allTodos from '../../reducers/selectors';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: {title: ""}};
    // debugger
    this.update =this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(e){
    this.setState({ todo: {title: e.target.value} });
  }

  handleSubmit(e){
    e.preventDefault();
    var index = new Date().getTime();
    this.props.props.receiveTodo({title: this.state.todo.title, id: index});
    this.setState({todo: { title: ""}});
  }
  render() {
    return (
      <div className='content'>
        <h2>Todo Item!</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.update}
            value={this.state.todo.title}
          />
          <button>Add Todo Item!</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
