import React from "react";
import Quote from "./components/Quote";

function App6() {
  let data = [
    {
      id: 1,
      msg: "Quote 1",
    },
    {
      id: 2,
      msg: "Quote 2",
    },
    {
      id: 3,
      msg: "Quote 3",
    },
    {
      id: 4,
      msg: "Quote 4",
    },
  ];

  return <Quote value={data} />;
}

export default App6;
