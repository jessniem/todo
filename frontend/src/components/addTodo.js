import React  from 'react';
import styled from 'styled-components';

const FormContainer = styled.fieldset`
  padding: 5px;
  margin: 10px;
  border: 1px solid black;
  max-width: 80vw;
  display: flex;
  justify-content: center; 
`;
const Input = styled.input`
  margin: 0.5em;
`;

const AddTodo = () => {
  return(
    <FormContainer>
      <legend>Add todo</legend>
      <form>
        <div>
          <Input placeholder="Add Task"></Input>
          <Input placeholder="Todo Date" type="date"></Input>
          <button type="submit">Add</button>
        </div>
      </form>
    </FormContainer>
  )
};

export default AddTodo;

