import React, { Component } from 'react';
import styled from 'styled-components';
// import { Fetch } from 'react-request';

const ListContainer = styled.fieldset`
  padding: 5px;
  margin: 10px;
  border: 1px solid black;
  max-width: 250px;
  display: flex;
  justify-content: center; 
`;
const TodoTitle = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-start; 
  align-items: center; 
  background: #EEEBF0;
  margin: 2px;
`;
const SmallText = styled.i`
  font-size: 0.8rem;
  color: #5E5D5F;
`;

class TodoLists extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedList: "",
      isLoading: true,
      todos: [],
      error:null,
      todoListArr: [],
    }
  }

  onClick(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("test", this.state);
  }

  test(data) {
    this.setState({
      todoListArr: data
    });
    console.log("HÄR", this.state.todoListArr);
  }

  componentDidMount() {

    fetch('http://localhost:8001/api/todos')
          .then (response => response.json())
          .then(data => {
            this.test(data);
          });
  }

  render() {
  const todoLists = this.state.todoListArr;
  const { isLoading, todos, error } = this.state;
    return(

        <fieldset className="container">

          <legend>Select Todo List</legend>
          {todoLists.map(list =>
            <TodoTitle onClick={this.onClick} name="selectedList" key={list.id} >{list.title} (<SmallText>{list.todoItems.length === 0 ? "empty" : list.todoItems.length}</SmallText>)</TodoTitle>
          )}
          <div>
            {/*${JSON.stringify(this.state.todoLists)}*/}
          </div>
        </fieldset>
      )
  }

}

export default TodoLists;