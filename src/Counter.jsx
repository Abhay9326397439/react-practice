import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const styles = {
    backgroundColor: "yellow",
    padding: "8px 16px",
    margin: "5px",
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Counter Result: {count}</h2>

      <button style={styles} onClick={increment}>
        Increment
      </button>

      <button style={styles} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
