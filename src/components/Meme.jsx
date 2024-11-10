import React from "react";

function Meme() {
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
        />
        <button className="form--button">Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src="https://i.imgflip.com/1g8my4.jpg" className="meme--image" />
        <h2 className="meme--text top">Test</h2>
        <h2 className="meme--text bottom">Test</h2>
      </div>
    </main>
  );
}

export default Meme;
