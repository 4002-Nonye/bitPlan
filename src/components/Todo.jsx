import React from "react";
import deleteIcon from "../assets/images/icons8-trash.svg";

const Todo = ({ todo, dispatch }) => {
  return (
    <li>
      <div>
        <input
          type="checkbox"
          className={` check ${todo.done ? " checked" : ""}`}
          onChange={() => dispatch({ type: "done", payload: todo.id })}
        />
        <label
          className={`${
            todo.done ? "line-through text-darkGrayishBlueLT" : ""
          }`}
        >
          {todo.task}
        </label>
      </div>

      <button
        className="delete"
        onClick={() => dispatch({ type: "deleteTodo", payload: todo.id })}
      >
        <img src={deleteIcon} alt="img-delete" />
      </button>
    </li>
  );
};

export default Todo;
