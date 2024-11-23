import React from "react";

function App8() {
  const [value, setValue] = React.useState("");

  function takeValEvent(e) {
    let newVal;
    if (
      e.target.value == "+" ||
      e.target.value == "-" ||
      e.target.value == "/" ||
      e.target.value == "x"
    ) {
      if (value == "") {
        newVal = "";
      } else if (value.slice(-1) == e.target.value) {
        newVal = value;
      } else {
        newVal = value + e.target.value;
      }
    } else {
      newVal = value + e.target.value;
    }

    setValue(() => {
      return newVal;
    });
  }

  function clearAllEvent() {
    setValue("");
  }

  function deleteEevent() {
    const newValue = value.slice(0, -1);
    setValue(newValue);
  }

  function calcEvent() {}

  console.log(value);

  return (
    <div className="container">
      <div className="card-box">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              name=""
              id=""
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <button onClick={clearAllEvent}>AC</button>
            <button onClick={deleteEevent}>DE</button>
            <button>%</button>
            <button value={"/"} onClick={takeValEvent}>
              /
            </button>
          </div>
          <div>
            <button value={7} onClick={takeValEvent}>
              7
            </button>
            <button value={8} onClick={takeValEvent}>
              8
            </button>
            <button value={9} onClick={takeValEvent}>
              9
            </button>
            <button value={"x"} onClick={takeValEvent}>
              X
            </button>
          </div>
          <div>
            <button value={4} onClick={takeValEvent}>
              4
            </button>
            <button value={5} onClick={takeValEvent}>
              5
            </button>
            <button value={6} onClick={takeValEvent}>
              6
            </button>
            <button value={"-"} onClick={takeValEvent}>
              -
            </button>
          </div>
          <div>
            <button value={1} onClick={takeValEvent}>
              1
            </button>
            <button value={2} onClick={takeValEvent}>
              2
            </button>
            <button value={3} onClick={takeValEvent}>
              3
            </button>
            <button value={"+"} onClick={takeValEvent}>
              +
            </button>
          </div>
          <div>
            <button value={0} onClick={takeValEvent}>
              0
            </button>
            <button>.</button>
            <button>=</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App8;
