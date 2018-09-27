import React, { Component } from 'react';
import '../App.css';
import styled from 'styled-components';

const Todo = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: center; 
  background: #EEEBF0;
  margin: 2px;
`;
const TodoText = styled.div`
  display: inline;
  display: flex;
  padding: 5px;
  font: 0.9rem;
`;


class todoList extends Component {
  constructor() {
    super();
    
    this.state = {
      currentTodo: {},
      currentList: []
    }
  }

  wholeList(data) {
    this.setState({
      currentTodo: data
    });
    this.setState({
      currentList: this.state.currentTodo.todoItems
    });
    console.log("currentTodo", this.state.currentTodo);
    console.log("currentList", this.state.currentList);
  }

  componentDidMount() {
    fetch('http://localhost:8001/api/todos/6')
              .then (response => response.json())
              .then(data => {
                this.wholeList(data);
              });
  }

  handleCompleteStatus(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.complete;

    this.setState({
      [name]: value
    });
  }

  render() {
    let todos = this.state.currentList;
    let title = this.state.currentTodo.title;
    // const { isLoading, todos, error } = this.state;

    return (
      <fieldset className="container">
        <legend>Todo list: {title}</legend>
        <div>
        </div>
          {todos.map(todo =>
            <Todo key={todo.id}>
              <TodoText>{todo.content}</TodoText>
              <input
                name="complete"
                type="checkbox"
                checked={todo.complete}
                onChange={this.handleCompleteStatus}
                 />
            </Todo>
          )}

      </fieldset>
    )
  }
}


export default todoList;