import React from "react";
import Quote from "./components/Quote";

function App6() {
  const [quoteData, setQuoteData] = React.useState({});
  const [apiData, setApiData] = React.useState({});
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  React.useEffect(() => {
    fetch("https://dummyapi.online/api/movies")
      .then((response) => response.json())
      .then((json) => setApiData(json));
  }, []);

  function changeQuote() {
    const randomLength = getRandomInt(0, apiData.length);
    const newQuoteData = apiData[randomLength];
    setQuoteData((prevQuoteData) => newQuoteData);
  }
  console.log(quoteData);

  return (
    <>
      <div className="container">
        <Quote value={quoteData} />
      </div>
      <br />
      <div className="gen-section ">
        <button onClick={changeQuote} className="gen-button">
          Generate New Card
        </button>
      </div>
    </>
  );
}

export default App6;
