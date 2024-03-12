"use client";
import { useState } from "react";

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 4; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");

  return (
    <div className="inline-block">
      <div className="conatiner mx-[600px] flex gap-[300px] pt-20 ">
        <div className="text-[20px] flex flex-col gap-5">
          <input
            className="py-2 ps-2 rounded-xl"
            placeholder="Add Item"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-[#46779c] py-3 px-5 rounded-xl font-bold transition duration-500  hover:bg-[#4a59de]"
            onClick={() => {
              setText("");
              setTodos([
                {
                  id: todos.length,
                  text: text,
                },
                ...todos,
              ]);
            }}
          >
            Add
          </button>
          <ul>
            {todos.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
