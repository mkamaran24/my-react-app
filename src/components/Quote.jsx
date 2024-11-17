import React from "react";

function Quote(props) {
  const [quoteData, setQuoteData] = React.useState("empty value");
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function changeQuote() {
    const randomLength = getRandomInt(0, props.value.length);
    const newQuoteData = props.value[randomLength].msg;

    setQuoteData((prevQuoteData) => newQuoteData);
  }
  return (
    <div>
      <button onClick={changeQuote}>Generate Quote</button>
      <p>{quoteData}</p>
    </div>
  );
}

export default Quote;
