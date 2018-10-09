import React, { Component } from "react";
import "../App.css";
import styled from "styled-components";
import AddTodo from "./addTodo";

const Todo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #eeebf0;
  margin: 2px;
`;
const TodoText = styled.div`
  display: inline;
  display: flex;
  padding: 5px;
  font: 0.9rem;
  margin: 5px;
`;
const LineThrough = styled.span`
  text-decoration: line-through;
`;
const Button = styled.button`
  padding: 5px;
  margin-top: 10px;
  width: 100%;
  color: red;
`;

class todoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      selectedTodoItem: null,
      test: null
    };
  }

  click = id => {
    this.setState({
      selectedTodoItem: id
    });
  };

  // setCompleted(e) {
  //   // fetch(`http://localhost:8001/api/todos//${this.state.currentTodo.id}/items/${this.state.selectedTodoItem}`)
  //   fetch(
  //     `http://localhost:8001/api/todos/${this.props.listId}/items/${
  //       this.state.selectedTodoItem
  //     }`
  //   )
  //     .then(response => response.json())
  //     .then(data => this.setState({ data: data, selectedTodoItem: data }));
  //   const fetchData = {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json; charset=utf-8" },
  //     body: JSON.stringify({ complete: true })
  //   };
  //   // fetch(`http://localhost:8001/api/todos/${this.state.currentTodo.id}/items/${this.state.selectedTodoItem}`, fetchData)
  //   fetch(
  //     `http://localhost:8001/api/todos/${this.props.listId}/items/4`,
  //     fetchData
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setList(data);
  //     });
  //   e.preventDefault();
  // }

  deleteList(list) {
    const fetchData = {
      method: "DELETE",
      headers: { "Content-Type": "application/json; charset=utf-8" }
    };
    fetch(`http://localhost:8001/api/todos/${list}`, fetchData).then(() =>
      console.log("Todo list deleted")
    );
  }

  componentDidMount() {
    console.log("CDM:", this.props.listId);
  }

  render() {
    let { listId } = this.props;
    const list = this.props.todos.find(list => {
      return list.id === listId;
    });
    if (list !== undefined) {
      console.log("LIST", list.todoItems);
    }

    // const { isLoading, todos, error } = this.state;

    return (
      <div>
        <p>
          selected todo item id:
          {this.state.selectedTodoItem}
        </p>
        {list !== undefined ? (
          <fieldset className="container">
            <legend>
              Todo list (id:
              {listId})
            </legend>
            {list !== undefined
              ? list.todoItems.map(item => (
                  <Todo key={item.id}>
                    <TodoText>
                      {item.complete ? (
                        <LineThrough>{item.content}</LineThrough>
                      ) : (
                        item.content
                      )}
                    </TodoText>
                    <input
                      onClick={() => this.click(item.id)}
                      name="complete"
                      type="checkbox"
                      checked={item.complete}
                    />
                    {this.setCompleted}
                  </Todo>
                ))
              : null}

            <Button onClick={() => this.delete(this.props.listId)}>
              Delete this list
            </Button>
            <AddTodo listId={listId} />
          </fieldset>
        ) : null}
      </div>
    );
  }
}

export default todoList;
