"use client";

import * as React from "react"
import Todo from "@/app/todolist/todo"
import TodoComposer from "./todocomposer";

import { useRef, useEffect } from 'react';

export default function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, label: "Learn React", completed: true },
    { id: 2, label: "Learn Next.js", completed: false },
    { id: 3, label: "Learn React Query", completed: false }
  ])

  const handleUpdateTodo = (updatedTodo) => {
    const newTodos = todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    ); // Create a brand new arrary, then force the state change will force React to re-renders
    setTodos (newTodos);
    console.log(newTodos);
  };

  const handleDeleteTodo = (idToDelete: number) => {
    const newTodos = todos.filter((todo) => todo.id !==idToDelete);
    setTodos (newTodos);
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Render count:", renderCount.current);
  });


   return (
    // You should render a `<ul>` or `<div>` here to wrap your list
    <div className="space-y-4">
      <TodoComposer onAddTodo= {handleAddTodo}/>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onUpdateTodo={handleUpdateTodo} // Pass the handler to the child
          onDeleteTodo={handleDeleteTodo}
        />
      ))
      }
    </div>
  );
}
