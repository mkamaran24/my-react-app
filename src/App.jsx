import boxes from "../boxes";
import Box from "./components/Box";
import React from "react";
function App() {
  console.log("this is App Cpm");
  const [block, setBlock] = React.useState(boxes);

  function toggle(id) {
    console.log("Thhis Toggle func");

    setBlock((prevBlock) => {
      return prevBlock.map((squer) => {
        return squer.id == id ? { ...squer, on: !squer.on } : squer;
      });
    });
  }

  const box_elem = block.map((squer) => {
    return <Box id={squer.id} key={squer.id} on={squer.on} toggle={toggle} />;
  });

  return <>{box_elem}</>;
}

export default App;
