import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCamClick = () => {
    let newText = text
      .replace(/\s(.)/g, function (a) {
        return a.toUpperCase();
      })
      .replace(/^(.)/, function (b) {
        return b.toLowerCase();
      });
      setText(newText);
  };
  const handleClrClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <label htmlFor="myBox">Example textarea</label>
        <textarea
          className="form-control"
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          value={text}
        ></textarea>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleCamClick}>
          Convert to Camelcase
        </button>
        <button className="btn btn-primary m-2" onClick={handleClrClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.length == 0 ? 0 : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {text.length == 0 ? 0 : 0.008 * text.split(" ").length} Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
