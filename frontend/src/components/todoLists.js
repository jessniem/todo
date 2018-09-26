import React, { Component } from 'react';
import styled from 'styled-components';
// import { Fetch } from 'react-request';
import axios from 'axios';

const ListContainer = styled.fieldset`
  padding: 5px;
  margin: 10px;
  border: 1px solid black;
  max-width: 250px;
  display: flex;
  justify-content: center; 
`;
// const Title = styled.div`
//   padding: 5px;
//   text-decoration: underline;
//   text-align: left;
// `;
// const InfoMsg = styled.div`
//   color: grey;
// `;
// const ErrorMsg = styled.div`
//   color: red;
// `;

class TodoLists extends Component {
  constructor() {
    super();

    this.state = {
      todoLists:
        [
          {
            "id": 6,
            "title": "updated title 2",
            "createdAt": "2018-09-21T05:40:33.593Z",
            "updatedAt": "2018-09-21T06:11:43.160Z",
            "todoItems": [
              {
                "id": 1,
                "content": "First Todo 4",
                "complete": false,
                "createdAt": "2018-09-21T05:49:42.258Z",
                "updatedAt": "2018-09-24T09:39:04.875Z",
                "todoId": 6
              }
            ]
          },
          {
            "id": 2,
            "title": "First Todo",
            "createdAt": "2018-09-20T15:11:19.293Z",
            "updatedAt": "2018-09-20T15:11:19.293Z",
            "todoItems": []
          },
          {
            "id": 4,
            "title": "todo message",
            "createdAt": "2018-09-21T05:28:46.821Z",
            "updatedAt": "2018-09-21T05:28:46.821Z",
            "todoItems": []
          },
          {
            "id": 3,
            "title": "todo message",
            "createdAt": "2018-09-21T05:23:00.607Z",
            "updatedAt": "2018-09-21T05:23:00.607Z",
            "todoItems": []
          },
          {
            "id": 7,
            "title": "new monday todo",
            "createdAt": "2018-09-24T07:15:03.848Z",
            "updatedAt": "2018-09-24T07:15:03.848Z",
            "todoItems": []
          }
        ]
    }

    // componentDidMount() {
    //   axios
    //     .get('http://localhost:8001/api/todos', {
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         "Access-Control-Allow-Origin": "*",
    //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    //       }
    //     })
    //     .then(res => {
    //       console.log(res);
    //     });
    //
    // }

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // };

  }

    render() {



      // fetch('http://localhost:8001/api/todos').then (response => response.json()).then(data => console.log("data:",data));
      return(
          <fieldset className="container">

            <legend>Select Todo List</legend>
            <div>
              ${JSON.stringify(this.state.todoLists)}
            </div>
          </fieldset>
        )
    }

}

export default TodoLists;