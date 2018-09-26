import React, { Component } from 'react';
import './App.css';
import AddTodo from './Components/addTodo';
import TodoLists from './Components/todoLists';
import TodoList from './Components/todoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo</h1>
        </header>
        <TodoLists/>
        <TodoList/>
        <AddTodo/>
      </div>
    );
  }
}

export default App;
