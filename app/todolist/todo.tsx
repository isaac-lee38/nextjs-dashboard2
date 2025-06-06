"use client";

import React, { useState } from 'react';

// Todo.jsx: Component for a single todo item
export default function Todo({todo, onUpdateTodo, onDeleteTodo}) {
  //Assume the todo is already initiated and can use directly

  // State to true if the todo item is currently being edited
  const [editing, setEditing] = useState(false);

  /**
   * Handles the click even on the checkbos 
   */
  const handleCheckboxClick = () => {
    onUpdateTodo({
      ...todo, // Spread existing todo properties
      completed: !todo.completed // Toggle the completed status
    });
    console.log(todo.id, " check box is", todo.completed);
  };

  //  You will need the e to pass-through the value into the function
  const handleUpdateLabel = (e) => {
    onUpdateTodo({
      ...todo, // Spread existing todo properties
      label: e.target.value
    });
    console.log(todo.id," label is", todo.label);
  };

  //  You will need the e to pass-through the value into the function
  const handleDeleteClick= () => {
    onDeleteTodo(todo.id);
    console.log("Trying to delete", todo.id);
  };

  const handleEditClick = () =>{
    setEditing(!editing); 
    /* This is the Direct Value Update 
    */
    console.log(todo.id," editing Mode is", editing);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-5">
      <div className="flex-grow">
        <div className="flex items-center">
          {/* Checkbox and Label Container */}
          <div className="flex items-center mr-3">
            <input
              type="checkbox"
              id={`todo-checkbox-${todo.id}`} // Unique ID for the checkbox
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              checked={todo.completed}
              onChange={handleCheckboxClick}
            />
          </div>

             {/*We will do a conditioning formatting here. Toggle between 2 modes: (1) Display (2) Edit */}
             {editing === true ? (
             <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={todo.label}
              onChange={handleUpdateLabel}
              autoFocus // Automatically focus the input when it appears
            />
             ) : (
            <label
              htmlFor={`todo-checkbox-${todo.id}`} // Associates label with checkbox for accessibility
              className={`flex-grow text-lg ${todo.completed ? "line-through text-gray-500" : "text-gray-900"} cursor-pointer`}
            >
              {todo.label}
            </label>
             )
             }
        </div>
      </div>

      {/* Edit/Save Button */}
      <button
        onClick={handleEditClick}
        className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        {editing ? "Save" : "Edit"}
      </button>
      <button
        onClick={handleDeleteClick}
        className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
      >
        {"Delete"}
      </button>
    </div>
  );
}
