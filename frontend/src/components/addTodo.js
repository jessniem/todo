import React, { Component }  from 'react';
import styled from 'styled-components';
import '../App.css';

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
  constructor() {
    super();
    this.state = {
      todoListId: 0,
      task: "",
      date: ""
    };
  }

  handleChange(e) {
      this.setState({
      [e.target.name]: e.target.value
      });
  }

  handleSubmit(e) {
    // console.log(`Todo added`);
    e.preventDefault();
  }


  render() {
    // console.log(this.state);
        return(
            <fieldset className="container">
              <legend>Add todo</legend>
              <Form onSubmit={e => this.handleSubmit(e)}>
                <Input placeholder="Add Task" name="task"  onChange={this.handleChange}></Input>
                <Input placeholder="Todo Date" type="date" name="date" onChange={this.handleChange}></Input>
                <Button type="submit" value="Submit">Add</Button>
              </Form>
            </fieldset>
          )
      }
};

export default AddTodo;

