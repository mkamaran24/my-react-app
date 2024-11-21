import React from "react";

export default function Window() {
  const [innerWindow, setInnerWindow] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWindowWidth() {
      console.log("Resized");
      setInnerWindow(window.innerWidth);
    }
    window.addEventListener("resize", watchWindowWidth);
    return function () {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWindowWidth);
    };
  }, []);

  return <h1>the Size of window is: {innerWindow}</h1>;
}
