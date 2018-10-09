import React from "react";
import "./App.css";
import AddTodo from "./Components/addTodo";
import TodoLists from "./Components/todoLists";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo</h1>
        </header>
        <TodoLists
          selected={this.selected}
          itemId={this.state.selectedTodoItemId}
        />
      </div>
    );
  }
}

export default App;
