import React from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";

function App9() {
  const [dice, setDice] = React.useState(() => getAllDice());

  const gameOver =
    dice.every((val) => val.isHold) &&
    dice.every((val) => val.value === dice[0].value);

  console.log(gameOver);

  function getAllDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHold: false,
      id: nanoid(),
    }));
  }

  function holdEvent(id) {
    setDice((oldDice) =>
      oldDice.map((dice) =>
        dice.id === id ? { ...dice, isHold: !dice.isHold } : dice
      )
    );
  }

  const diceComp = dice.map((diceObj) => (
    <Dice
      key={diceObj.id}
      value={diceObj.value}
      status={diceObj.isHold}
      hold={() => holdEvent(diceObj.id)}
    />
  ));

  function rollDice() {
    if (!gameOver) {
      setDice((oldDice) =>
        oldDice.map((dice) =>
          dice.isHold ? dice : { ...dice, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setDice(getAllDice());
    }
  }

  return (
    <main>
      {gameOver && <h1>You Win</h1>}
      <div className="dice-container">{diceComp}</div>
      <button className="roll-dice" onClick={rollDice}>
        {gameOver ? "Restart Game" : "Roll"}
      </button>
    </main>
  );
}

export default App9;
