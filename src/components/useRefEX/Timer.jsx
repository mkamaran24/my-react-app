import React, { useState, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  function startTimer() {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  return (
    <div>
      <h1>Timer: {seconds}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;

// Hi
