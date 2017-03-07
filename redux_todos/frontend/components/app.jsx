import React from 'react';
import TodoListItem from './todo_list/todo_list_item';
import TodoListContainer from './todo_list/todo_list_container';
// import TeamList from './team_list'; // v1
// import TeamListContainer from './team_list_container'; // v2

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() { // v1
  //   this.props.store.subscribe(this.forceUpdate.bind(this));
  // }

  // componentWillUnmount() {
  //   this.props.store.unsubscribe(this.forceUpdate.bind(this));
  // }
  render() {
    // return <div>works</div>; // v0
    // return (<TeamList teams={teams} />); // v1
    return (<TodoListContainer />); // v2
  }
}
export default App;
