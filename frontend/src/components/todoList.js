import React, { Component } from 'react';
import '../App.css';

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
      }
    }

    const list = Object.values(this.state.currentTodo.todoItems);

    // Object.entries(list).forEach(
    //   ([key, value]) => console.log(key, value)
    // );
    // console.log(JSON.stringify(list))

  }

  render() {
    return (
      <fieldset className="container">
        <legend>Todo list: {this.state.currentTodo.title}</legend>
        <div>
          {JSON.stringify(this.state.currentTodo.todoItems)}
        </div>
        <div>
          this.state.currentTodo
        </div>

      </fieldset>
    )
  }
}


export default todoList;