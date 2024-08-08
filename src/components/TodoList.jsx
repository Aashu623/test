import React, { useState } from "react";

function TodoList() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = (value) => {
    console.log(value.length);
    if (value.length <= 0) {
      setError("Enter a task");
      return;
    }
    setTodoList((prev) => [...prev, value]);
    setValue("");
    setError("");
  };

  const removeTask = (taskToRemove) => {
    setTodoList((tasks) => tasks.filter((task) => task !== taskToRemove));
  };
  return (
    <div className="container w-1/4 mx-auto my-10 border border-black p-2">
      <h1 className="text-center font-semibold text-4xl">To Do List</h1>
      <div className="mt-2 flex flex-col gap-2 my-2 ">
        <input
          id="first-name"
          name="first-name"
          type="text"
          placeholder="Enter your task"
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
          autoComplete="given-name"
          className="block w-full rounded-md border-0 py-1.5 px-2 text-black font-bold  shadow-sm ring-1 ring-inset bg-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {error && (
          <p className="block border-0 py-1.5 px-2 text-red-500 font-bold ">
            {error}
          </p>
        )}

        <button
          onClick={() => addTask(value)}
          className="block w-full bg-blue-200 rounded-md text-semibold border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          Add Task
        </button>
      </div>
      {todoList.map((task) => (
        <div className="container flex gap-5 bg-purple-200 border rounded-md my-1 py-2">
          <h1 className="w-5/6 text-2xl font-semibold">{task}</h1>
          <div className="flex">
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => removeTask(task)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
