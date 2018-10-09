import React from "react";
import styled from "styled-components";
import List from "./list";

// const ListContainer = styled.fieldset`
//   padding: 5px;
//   margin: 10px;
//   border: 1px solid black;
//   max-width: 250px;
//   display: flex;
//   justify-content: center;
// `;
const TodoTitle = styled.div`
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #eeebf0;
  margin: 2px;
`;
const SmallText = styled.i`
  font-size: 0.8rem;
  color: #5e5d5f;
`;

class TodoLists extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      error: null,
      listArr: [],
      listId: null,
      selList: {}
    };
  }

  click = id => {
    this.setState({
      listId: id
    });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:8001/api/todos")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(data => {
        this.setList(data);
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }
  setList = data => {
    this.setState({
      listArr: data,
      isLoading: false
    });
  };

  render() {
    const { listArr, listId } = this.state;
    // const { isLoading, todos, error } = this.state;
    // if (isLoading) {
    //   return <p>Loading...</p>;
    // }

    return (
      <fieldset className="container">
        <legend>Select Todo List</legend>
        {listArr.map(list => (
          <TodoTitle onClick={() => this.click(list.id)} key={list.id}>
            {list.title} (
            <SmallText>
              {list.todoItems.length === 0 ? "empty" : list.todoItems.length}
            </SmallText>
            )
          </TodoTitle>
        ))}
        {this.state.selectedTodoListId !== null ? (
          <List listId={this.state.listId} todos={listArr} />
        ) : null}
      </fieldset>
    );
  }
}

export default TodoLists;
