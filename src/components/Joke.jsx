import React from "react";

function Joke(props) {
  const [show, setShow] = React.useState(true);

  function change() {
    setShow((prevShow) => {
      return (prevShow = !prevShow);
    });
  }

  const p_style = {
    display: show ? "block" : "none",
  };

  return (
    <div className="joke-card">
      <h3>{props.setup}</h3>
      <p style={p_style}>{props.punchline}</p>
      <button onClick={change}>{show ? "Hide" : "Show"} Answer</button>
    </div>
  );
}

export default Joke;
