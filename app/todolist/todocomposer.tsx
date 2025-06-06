"use client";

import React, {useState} from 'react';

export default function TodoComposer({onAddTodo}) {
    const [label, setLabel] = useState ('');

    //Recognize the event that you are typing, then update the value as followed
    const handleLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const handleAddTodoClick = () => {
        if (label.trim()) {
            //Create a new todo project
            const newTodo = {
                id: Date.now(),
                label: label.trim(),
                completed: false
            };
            onAddTodo (newTodo);
            setLabel('');
        };
    };    

    return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-5">
      <input
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        value={label}
        onChange={handleLabelChange}
        placeholder="Add a new todo"
      />
      <button
        onClick={handleAddTodoClick}
        className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        Add
      </button>
    </div>
  );
}