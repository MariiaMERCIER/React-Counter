import "./App.css";
import Vector from "./assets/images/Vector.png";
import { useState } from "react";
import Plus from "./assets/images/Plus.png";
import Moins from "./assets/images/Moins.png";

const App = () => {
  const [counter, setCounter] = useState(0);
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <header className="header">
        <img className="logo" src={Vector} alt="logo" />
        <h1> React Counter</h1>
      </header>

      <div className="container">
        <div className="btnHaut">
          <button
            className="moins"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            <img
              style={counter === 0 && { display: "none" }}
              src={Moins}
              alt="button moins"
            />
          </button>
          <span>{counter}</span>
          <button
            className="plus"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            <img
              style={counter > 10 && { display: "none" }}
              src={Plus}
              alt="button plus"
            />
          </button>
        </div>
        <div className="btnBas">
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default App;
