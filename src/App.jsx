import React, { useReducer } from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import ThemeToggle from "./components/ThemeToggle";
import Tasks from "./components/Tasks";
import Filter from "./components/Filter";
import { v4 as uuid } from "uuid";



const initialState = {
  todos: [],
  newTask: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "updateTerm":
      return { ...state, newTask: action.payload };

    case "addTask":
      const newTaskObj = {
        task: state.newTask,
        done: false,
        id: uuid(),
      };
      return {
        ...state,
        todos: state.newTask ? [...state.todos, newTaskObj] : state.todos,
        newTask: "",
      };

    default:
      throw new Error("Action unknown");
  }
};

const App = () => {
  const [{ todos, newTask }, dispatch] = useReducer(reducer, initialState);
  const totalTasks = todos.length;
  return (
    <>
      <Header />

      <Main>
        <ThemeToggle />
        <Form dispatch={dispatch} newTask={newTask} />
        <Tasks totalTasks={totalTasks} todos={todos} />
        <Filter className="xl:hidden flex items-center justify-center mt-4 bg-veryLightGrayLT dark:bg-veryDarkGrayishBlueDT p-4 rounded-sm" />
        <p className="text-center mt-5 text-darkGrayishBlueDT">
          Drag and drop to re-order list.
        </p>
      </Main>
    </>
  );
};

export default App;
