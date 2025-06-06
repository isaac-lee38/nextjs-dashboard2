"use client";

import React, { useState } from 'react';

// Todo.jsx: Component for a single todo item
function Todo() {
  // State for the todo item (label and completion status)
  const [todo, setTodo] = useState({
    id: 1,
    label: "Learn React",
    completed: false,
  });

  // State to track if the todo item is currently being edited
  const [editing, setEditing] = useState(false);

  /**
   * Handles the click event on the checkbox.
   * Toggles the 'completed' status of the todo item.
   */
  const handleCheckboxClick = () => {
    setTodo({
      ...todo, // Spread existing todo properties
      completed: !todo.completed // Toggle the completed status
    });
  };

  /**
   * Handles the click event on the "Edit" / "Save" button.
   * Toggles the 'editing' state.
   */
  const handleEditClick = () => {
    setEditing(!editing); // Toggle editing mode
  };

  /**
   * Handles the change event on the input field when editing the todo label.
   * Updates the 'label' of the todo item in the state.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object from the input field.
   */
  const handleUpdateLabel = (e) => {
    setTodo({
      ...todo, // Spread existing todo properties
      label: e.target.value // Update the label with the new value
    });
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

          {/* Conditional rendering: Display input field if editing, otherwise display label */}
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
          )}
        </div>
      </div>

      {/* Edit/Save Button */}
      <button
        onClick={handleEditClick}
        className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        {editing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

// App.jsx: Main application component to render the Todo item
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center mb-8">My Todo Item</h1>
            </div>
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
}
