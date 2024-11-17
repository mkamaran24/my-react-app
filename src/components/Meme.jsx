import React from "react";
import memeData from "../../memeData";

function Meme() {
  const [formData, setFormData] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1g8my4.jpg",
    height: "500",
    width: "500",
  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function handleChange(event) {
    console.log("Yess");
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleEvent() {
    const randNumImg = getRandomInt(0, memeData.data.memes.length);
    setFormData((prevFormData) => ({
      ...prevFormData,
      randomImg: memeData.data.memes[randNumImg].url,
      height: memeData.data.memes[randNumImg].height,
      width: memeData.data.memes[randNumImg].width,
    }));
  }

  console.log(formData.randomImg);

  //
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={formData.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={formData.bottomText}
          onChange={handleChange}
        />
        <button onClick={handleEvent} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={formData.randomImg} className="meme--image" />
        <h2 className="meme--text top">{formData.topText}</h2>
        <h2 className="meme--text bottom">{formData.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
