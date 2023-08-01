import React from "react";

const Form = ({ dispatch, newTask }) => {
  return (
    <form
      className="flex bg-veryLightGrayLT dark:bg-veryDarkGrayishBlueDT p-4  rounded-sm items-center "
      onSubmit={(e) =>{ e.preventDefault()
        dispatch({type:'addTask'})
      }}
    >
      <div className="circle"></div>
      <input
        value={newTask}
        onChange={(e) =>
          dispatch({ type: "updateTerm", payload: e.target.value })
        }
        placeholder="Create a new todo..."
        className="w-full outline-none border-none bg-veryLightGrayLT dark:bg-veryDarkGrayishBlueDT pl-4  .placeholder-darkGrayishBlueDT text-veryDarkDesaturatedBlueDT dark:text-veryLightGrayLT text-[16px] font-normal caret-brightBlue"
      />
    </form>
  );
};

export default Form;
