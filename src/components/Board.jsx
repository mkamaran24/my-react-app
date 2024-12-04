import React from "react";

function Square(props) {
  return (
    <button onClick={props.hold} className="seq" disabled={props.lock}>
      {props.value}
    </button>
  );
}

function Board() {
  let [val, setVal] = React.useState(() => generateValArray());
  let oldVal = React.useRef(null);
  let [playyerTurn, setPlayerTurn] = React.useState("X");
  let [winGame, setWinGame] = React.useState(false);

  function generateValArray() {
    return new Array(9).fill(null);
  }

  function checkWinner(val) {
    if (isX(val) || isO(val)) {
      setWinGame(true);
    }
  }

  function isX(val) {
    if (val[0] === "X" && val[1] === "X" && val[2] === "X") {
      return true;
    } else if (val[3] === "X" && val[4] === "X" && val[5] === "X") {
      return true;
    } else if (val[6] === "X" && val[7] === "X" && val[8] === "X") {
      return true;
    } else if (val[0] === "X" && val[3] === "X" && val[6] === "X") {
      return true;
    } else if (val[1] === "X" && val[4] === "X" && val[7] === "X") {
      return true;
    } else if (val[2] === "X" && val[5] === "X" && val[8] === "X") {
      return true;
    } else if (val[0] === "X" && val[4] === "X" && val[8] === "X") {
      return true;
    } else if (val[2] === "X" && val[4] === "X" && val[6] === "X") {
      return true;
    } else {
      return false;
    }
  }
  function isO(val) {
    if (val[0] === "O" && val[1] === "O" && val[2] === "O") {
      return true;
    } else if (val[3] === "O" && val[4] === "O" && val[5] === "O") {
      return true;
    } else if (val[6] === "O" && val[7] === "O" && val[8] === "O") {
      return true;
    } else if (val[0] === "O" && val[3] === "O" && val[6] === "O") {
      return true;
    } else if (val[1] === "O" && val[4] === "O" && val[7] === "O") {
      return true;
    } else if (val[2] === "O" && val[5] === "O" && val[8] === "O") {
      return true;
    } else if (val[0] === "O" && val[4] === "O" && val[8] === "O") {
      return true;
    } else if (val[2] === "O" && val[4] === "O" && val[6] === "O") {
      return true;
    } else {
      return false;
    }
  }

  const btnArray = new Array(9)
    .fill(0)
    .map((_, index) => (
      <Square
        key={index}
        hold={() => putValEvent(index)}
        value={val[index]}
        lock={winGame}
      />
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
    checkWinner(newVal);
  }

  function resetGame() {
    setWinGame(false);
    setVal(generateValArray());
  }

  return (
    <>
      <h1>Player Turn: {playyerTurn}</h1>
      <div className="board">{btnArray}</div>
      {winGame && <h1>Player {oldVal.current} win the game</h1>}
      {winGame && <button onClick={resetGame}>Restart Game</button>}
    </>
  );
}

export default Board;

// test
//test 2
//test 3
//test 4
