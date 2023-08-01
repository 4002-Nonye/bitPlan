import React from "react";
import Todo from "./Todo";
import Filter from "./Filter";

const Tasks = ({ totalTasks, todos, dispatch ,activeFilter}) => {
  return (
    <>
      {" "}
      <div className="mt-8 bg-veryLightGrayLT dark:bg-veryDarkGrayishBlueDT rounded-sm">
        <ul className=" max-h-[20rem] overflow-scroll  no-scrollbar ">
          {todos.map((todo, index) => (
            <Todo todo={todo} key={index} dispatch={dispatch} />
          ))}
        </ul>

        <div className="flex justify-between p-6 text-sm text-darkGrayishBlueDT ">
          <p>{totalTasks} item(s) left</p>

          <p
            className="cursor-pointer"
            onClick={() => dispatch({ type: "clearCompleted" })}
          >
            Clear Completed
          </p>
        </div>
      </div>{" "}
      <Filter
        dispatch={dispatch}
        activeFilter={activeFilter}
       
        className="flex items-center justify-center mt-4 bg-veryLightGrayLT dark:bg-veryDarkGrayishBlueDT p-4 rounded-sm"
      />
    </>
  );
};

export default Tasks;
