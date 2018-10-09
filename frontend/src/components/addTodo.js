import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";

const Input = styled.input`
  margin: 0.5em;
  padding: 4px;
`;
const Button = styled.button`
  margin: 0.5em;
  padding: 4px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: ""
      // date: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    const fetchData = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ content: this.state.task })
    };
    fetch(
      `http://localhost:8001/api/todos/${this.props.listId}/items`,
      fetchData
    ).then(() => console.log("Todo added"));
    // todo: add error handling
    e.preventDefault();
  }

  addTodo(text) {
    const fetchData = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ text })
    };
    fetch(
      `http://localhost:8001/api/todos/${this.state.listId}/items`,
      fetchData
    ).then(() => console.log("Todo added"));
  }

  render() {
    return (
      <div>
        <p>Add todo</p>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Input
            placeholder="Add Task"
            name="task"
            onChange={e => this.handleChange(e)}
          />
          {/*<Input placeholder="Todo Date" type="date" name="date" onChange={e => this.handleChange(e)}></Input>*/}
          <Button type="submit" value="Submit">
            Add
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddTodo;
