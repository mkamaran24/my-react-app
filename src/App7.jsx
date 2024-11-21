import React from "react";
import Window from "./components/Window";

export default function App7() {
  const [showWindow, setShowWindow] = React.useState(true);

  function showWindowEvent() {
    setShowWindow(!showWindow);
  }

  return (
    <div className="win-size">
      <button onClick={showWindowEvent}>Show On/Off Window Size</button>
      {showWindow && <Window />}
    </div>
  );
}
