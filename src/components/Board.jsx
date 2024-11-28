import React from "react";

function Square(props) {
  return (
    <button onClick={props.hold} className="seq">
      {props.value}
    </button>
  );
}

function Board() {
  let [val, setVal] = React.useState(() => generateValArray());
  let oldVal = React.useRef(null);
  let [playyerTurn, setPlayerTurn] = React.useState("X");

  function generateValArray() {
    return new Array(9).fill(null);
  }

  console.log("renders");

  const btnArray = new Array(9)
    .fill(0)
    .map((_, index) => (
      <Square key={index} hold={() => putValEvent(index)} value={val[index]} />
    ));

  // Handle click events
  function putValEvent(id) {
    const newVal = [...val];
    if (val.every((v) => v === null)) {
      newVal[id] = "X";
      oldVal.current = newVal[id];
      setVal(newVal);
      setPlayerTurn("O");
    } else {
      if (oldVal.current === "X" && val[id] !== oldVal.current) {
        newVal[id] = "O";
        oldVal.current = newVal[id];
        setVal(newVal);
        setPlayerTurn("X");
      } else if (oldVal.current === "O" && val[id] !== oldVal.current) {
        newVal[id] = "X";
        oldVal.current = newVal[id];
        setVal(newVal);
        setPlayerTurn("O");
      }
    }
  }

  return (
    <>
      <h1>Player Turn: {playyerTurn}</h1>
      <div className="board">{btnArray}</div>
    </>
  );
}

export default Board;

// test
