import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");       // input value
  const [todos, setTodos] = useState([]);     // list of todos
  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);  // add todo to list
      setTodo("");                 // clear input
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div>
      <h1>React TODO List</h1>

      <input type="text"value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
