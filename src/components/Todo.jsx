import React from "react";

const Todo = ({ todo }) => {
  return (
    <li>
      <label>{todo.task}</label>
    </li>
  );
};

export default Todo;
