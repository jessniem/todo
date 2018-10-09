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
const LineThrough = styled.span`
  text-decoration: line-through;
`;

class todoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTodo: {},
      currentList: [],
      selectedTodoList: this.props.id,
      selectedTodoItem: 13,
      data: {}
    }
  }

  setList(data) {
    this.setState({
      currentTodo: data
    });
    // this.setState({
    //   currentList: this.state.currentTodo.todoItems,
    //   // selectedTodoItem: this.state.currentList
    // });
    console.log("currentTodo", this.state.currentTodo);
    console.log("currentList", this.state.currentList);
    // console.log("selectedTodoItem", this.state.selectedTodoItem);
  }

  componentDidMount() {
    fetch(`http://localhost:8001/api/todos/${this.state.selectedTodoList}`)
      .then (response => response.json())
        .then(data => {
          this.setList(data);
        });
  }

  setCompleted(e) {
    // fetch(`http://localhost:8001/api/todos//${this.state.currentTodo.id}/items/${this.state.selectedTodoItem}`)
    fetch(`http://localhost:8001/api/todos/6/items/9`)
     .then(response => response.json())
       .then(data => this.setState({ data: data, selectedTodoItem: data }));
    const fetchData = {
      method: 'PATCH',
      headers: {"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify({complete: true})
    };
    // fetch(`http://localhost:8001/api/todos/${this.state.currentTodo.id}/items/${this.state.selectedTodoItem}`, fetchData)
    fetch(`http://localhost:8001/api/todos/6/items/9`, fetchData)
      .then(response => response.json())
        .then(data => {
          this.setList(data);
        });
    e.preventDefault();
  }

  render() {
    let todos = this.state.currentList;
    let title = this.state.currentTodo.title;
    // let todoStatus = this.state.current;
    // const { isLoading, todos, error } = this.state;

    return (
      <fieldset className="container">
        <legend>Todo list: {title}</legend>
          {todos.map(todo =>
            <Todo key={todo.id}>
              <TodoText>{todo.complete ? <LineThrough>{todo.content}</LineThrough> : todo.content}</TodoText>
              <input
                name="complete"
                type="checkbox"
                checked={todo.complete}
                onChange={this.setCompleted}
                 />
            </Todo>
          )}
      </fieldset>
    )
  }
}

export default todoList;