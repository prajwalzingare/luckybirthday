import "./index.css";
import React, { useState } from "react";
import happy from "./happy1.jpg";
import sad from "./sad.png";

var happyImg = <img alt="happyImage" src={happy} width="10%" height="5%" />;

var sadImg = <img alt="sadImage" src={sad} width="10%" height="5%" />;

var luckyNo = 0;

export default function App() {
  var [resultToShow, setResultToShow] = useState(["", ""]);
  var [userDateInput, setUserDateInput] = useState("");

  function handelBtnCheck(e) {
    e.preventDefault();

    const dateArray = userDateInput.split("-");

    var sum = 0;

    dateArray.forEach((string) => {
      for (var i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
    });

    if (sum % Number(luckyNo) === 0) {
      setResultToShow(["Congratulation! You are lucky", happyImg]);
    } else {
      setResultToShow([" Sorry! You are not lucky", sadImg]);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Enter your birthdate and lucky no </h1>
        <form onSubmit={handelBtnCheck}>
          <label className="label" htmlFor="datePicker">
            Select your birth-date
          </label>
          <input
            id="datePicker"
            onChange={(e) => {
              setUserDateInput(e.target.value);
            }}
            type="date"
            required
          />{" "}
          <br />
          <label className="label" htmlFor="luckyNo">
            {" "}
            enter your lucky no
          </label>
          <input
            id="luckyNo"
            min="1"
            step="1"
            required
            onChange={(e) => {
              luckyNo = e.target.value;
            }}
            type="number"
          />
          <br />
          <button type="submit"> check </button>
        </form>

        <div className="output">
          <div className="label">{resultToShow[0]} </div>
          {resultToShow[1]}
        </div>
      </div>
    </div>
  );
}
