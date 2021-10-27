import React from "react";
import Header from "./header";
import NavBar from "./navBar";

class Container extends React.Component {
  render() {
    return (
      // pass the state data from the TodoContainer down to the TodosList child component
      // todos data is passed as props using the line todos={this.state.todos}
      <div>
        <Header />
        <NavBar />
      </div>
      // then it can be accessed within TodoList component through this.props.todos
    );
  }
}

export default Container;
