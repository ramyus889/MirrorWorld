"use client";
import { useState } from "react";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", price: "710$", done: true },
  { id: 1, title: "Eat tacos", price: "283$", done: false },
  { id: 2, title: "Brew tea", price: "823$", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title, price) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
        price: price,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <div className="inline-block">
      <div className="conatiner mx-[600px] flex gap-[300px] pt-20 ">
        <div className="text-[20px] flex flex-col gap-5">
          <AddTodo onAddTodo={handleAddTodo} />
          <TaskList
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);

  return (
    <>
      <input
        className="py-2 ps-2 rounded-xl"
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="py-2 ps-2 rounded-xl"
        placeholder="Add price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        className="bg-[#46779c] py-3 px-5 rounded-xl font-bold transition duration-500  hover:bg-[#4a59de]"
        onClick={() => {
          setTitle("");
          setPrice("");
          onAddTodo(title, price);
        }}
      >
        Add
      </button>
    </>
  );
}

function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul className="*:my-2">
      {todos.map((todo) => (
        <li className="py-2 px-3 bg-slate-700 rounded-xl" key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <div className="flex flex-col gap-3">
          <input
            className="py-2 ps-2 rounded-xl"
            value={todo.title}
            onChange={(e) => {
              onChange({
                ...todo,
                title: e.target.value,
              });
            }}
          />
          <input
            className="py-2 ps-2 rounded-xl"
            value={todo.price}
            onChange={(e) => {
              onChange({
                ...todo,
                price: e.target.value,
              });
            }}
          />
        </div>
        <br />
        <button
          className="bg-[#46779c] py-2 px-4 mx-4 my-4 rounded-xl font-bold transition duration-500 hover:bg-[#4a59de]"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        <div className="py-2 px-3 bg-slate-800 rounded-xl flex  gap-10 justify-between">
          <span>{todo.title}</span>
          <span>{todo.price}</span>
        </div>
        <br />
        <button
          className="bg-[#46779c] py-2 px-4 rounded-xl  font-bold transition duration-500 hover:bg-[#4a59de]"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <label className="flex gap-3  items-center">
      {" "}
      {todoContent}
      <button
        className="bg-[#46779c] py-2 px-4 rounded-xl font-bold transition duration-500 hover:bg-[#4a59de]"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </label>
  );
}
