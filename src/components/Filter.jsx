import React, { useState } from "react";

const Filter = ({ dispatch, className, activeFilter }) => {
  return (
    <div className={className}>
      {" "}
      <p
        className={` ${
          activeFilter === "allTask" ? "active" : ""
        } cursor-pointer text-darkGrayishBlueLT `}
        onClick={() => dispatch({ type: "allTasks" })}
      >
        All
      </p>
      <p
        className={`  ${
          activeFilter === "activeTask" ? "active" : ""
        } ml-6 cursor-pointer text-darkGrayishBlueLT`}
        onClick={() => dispatch({ type: "activeTasks" })}
      >
        Active
      </p>
      <p
        className={` ${
          activeFilter === "completedTask" ? "active" : ""
        } ml-6 cursor-pointer text-darkGrayishBlueLT `}
        onClick={() =>
          dispatch({ type: "completedTasks" })
        }
      >
        Completed
      </p>
    </div>
  );
};

export default Filter;
