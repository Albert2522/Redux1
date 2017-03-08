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
    let todo = {title: this.state.todo.title, id: index, body: "asdf", done: false};
    this.props.props.createTodo({todo}).then(
    this.setState({title: "", body: "", done: "",})).fail( (data) => ( alert(data.errors)));
  }
  render() {
    return (
      <div className='content'>
        <h2>Todo Item!</h2>
        <form onSubmit={this.handleSubmit}>
          Title <input
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
