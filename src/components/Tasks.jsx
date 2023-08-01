import React from "react";
import Todo from "./Todo";
import Filter from "./Filter";

const Tasks = ({ totalTasks, todos }) => {
  return (
    <div className="mt-8 bg-veryLightGrayLT dark:bg-veryDarkGrayishBlueDT rounded-sm">
      <ul className=" max-h-[20rem] overflow-scroll  no-scrollbar ">
        {todos.map((todo,index) => (
          <Todo todo={todo} key={index} />
        ))}
      </ul>

      <div className="flex justify-between p-6 text-sm text-darkGrayishBlueDT ">
        <p>{totalTasks} items left</p>
        <Filter className="xl:flex hidden" />

        <p>Clear Completed</p>
      </div>
    </div>
  );
};

export default Tasks;
