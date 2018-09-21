import React, { Component } from 'react';

const AddTodo = () => {
  return(
    <div>
      <form>
        <label>Add todo</label>
        <div>
            <input placeholder="Add Task"></input>
          <input placeholder="Todo Date"></input>
            <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
};

export default AddTodo;

