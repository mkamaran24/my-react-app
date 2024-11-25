import React from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";

function App9() {
  const [dice, setDice] = React.useState(getAllDice());

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
  console.log(dice);

  const diceComp = dice.map((diceObj) => (
    <Dice
      key={diceObj.id}
      value={diceObj.value}
      status={diceObj.isHold}
      hold={() => holdEvent(diceObj.id)}
    />
  ));

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((dice) =>
        dice.isHold ? dice : { ...dice, value: Math.ceil(Math.random() * 6) }
      )
    );
  }

  return (
    <main>
      <div className="dice-container">{diceComp}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App9;
