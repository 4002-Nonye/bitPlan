import React, { useEffect, useReducer, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import ThemeToggle from "./components/ThemeToggle";
import Tasks from "./components/Tasks";
import { v4 as uuid } from "uuid";


const initialState = {
  todos: [],
  newTask: "",
  sortedTodo: [],
  activeFilter: "allTask",
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
      const updatedTodos = [...state.todos, newTaskObj];
      return {
        ...state,
        todos: state.newTask ? updatedTodos : state.todos,
        newTask: "",
        sortedTodo: state.newTask ? updatedTodos : state.sortedTodo,
      };

    case "done":
      const updatedTask = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
      return { ...state, todos: updatedTask, sortedTodo: updatedTask };

    case "deleteTodo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        sortedTodo: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "clearCompleted":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.done),
        sortedTodo: state.todos.filter((todo) => !todo.done),
      };

    case "allTasks":
      return { ...state, sortedTodo: state.todos, activeFilter: "allTask" };
    case "activeTasks":
      return {
        ...state,
        sortedTodo: state.todos.filter((todo) => !todo.done),
        activeFilter: "activeTask",
      };

    case "completedTasks":
      return {
        ...state,
        sortedTodo: state.todos.filter((todo) => todo.done),
        activeFilter: "completedTask",
      };

    default:
      throw new Error("Action unknown");
  }
};

const App = () => {
  const [{ todos, newTask, sortedTodo, activeFilter }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const totalTasks = sortedTodo.filter((todo) => !todo.done).length;

 

 
  return (
    <>
      <Header />

      <Main>
        <ThemeToggle />
        <Form dispatch={dispatch} newTask={newTask} />
        <Tasks
          totalTasks={totalTasks}
          todos={sortedTodo}
          dispatch={dispatch}
          activeFilter={activeFilter}
        />
      </Main>
    </>
  );
};

export default App;
