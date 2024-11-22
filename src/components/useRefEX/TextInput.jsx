import React, { useRef } from "react";

function TextInput() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus(); // Directly focuses the input element
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default TextInput;
