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

    // TODO: get connection working
    this.state = {
      currentTodo: {
        "id": 6,
        "title": "Todo before X-mas",
        "createdAt": "2018-09-21T05:40:33.593Z",
        "updatedAt": "2018-09-21T06:11:43.160Z",
        "todoItems": [
          {
            "id": 1,
            "content": "Buy presents",
            "complete": false,
            "createdAt": "2018-09-21T05:49:42.258Z",
            "updatedAt": "2018-09-24T09:39:04.875Z",
            "todoId": 6
          },
          {
            "id": 2,
            "content": "Eat gingerbread",
            "complete": false,
            "createdAt": "2018-09-21T05:49:42.258Z",
            "updatedAt": "2018-09-24T09:39:04.875Z",
            "todoId": 6
          }
        ]
      },
      currentList:
        [
          {
            "id": 1,
            "content": "Buy presents",
            "complete": true,
            "createdAt": "2018-09-21T05:49:42.258Z",
            "updatedAt": "2018-09-24T09:39:04.875Z",
            "todoId": 6
          },
          {
            "id": 2,
            "content": "Eat gingerbread",
            "complete": false,
            "createdAt": "2018-09-21T05:49:42.258Z",
            "updatedAt": "2018-09-24T09:39:04.875Z",
            "todoId": 6
          }
        ]
    }

    const list = Object.values(this.state.currentTodo.todoItems);
    console.log("json", JSON.stringify(list))

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
    // let todoItems = this.state.currentTodo.todoItems;

    return (
      <fieldset className="container">
        <legend>Todo list: {title}</legend>
        <div>
        </div>
          {todos.map(todo =>
            <Todo>
              <TodoText key={todo.id}>{todo.content}</TodoText>
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