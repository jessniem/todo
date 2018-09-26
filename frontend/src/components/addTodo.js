import React  from 'react';
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

const AddTodo = () => {
  return(
    <fieldset className="container">
      <legend>Add todo</legend>
      <Form>
        <Input placeholder="Add Task"></Input>
        <Input placeholder="Todo Date" type="date"></Input>
        <Button type="submit">Add</Button>
      </Form>
    </fieldset>
  )
};

export default AddTodo;

