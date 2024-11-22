import React, { useState, useRef, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count); // Stores the previous count value

  useEffect(() => {
    prevCount.current = count; // Update the ref after the render
  }, []);

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
