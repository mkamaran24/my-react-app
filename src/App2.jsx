import React from "react";
import joke_data from "../jokesData.js";
import Joke from "./components/Joke";

function App2() {
  //   const [jokes, setJokes] = React.useState(joke_data);
  //   const jokes_elem = jokes.map((joke, index) => {
  //     return <Joke key={index} setup={joke.setup} punchline={joke.punchline} />;
  //   });
  const jokes_elem = joke_data.map((joke, index) => {
    return <Joke key={index} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div className="container">{jokes_elem}</div>;
}

export default App2;
