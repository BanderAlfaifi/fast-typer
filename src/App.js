import { useState } from "react";
import "./default-style.css";
import "./styles.css";
import Timer from "./components/Timer";
import Result from "./components/Result";
import Paras from "./texts/english/paras.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StyleChoosing from "./components/StyleChoosing";

export default function App() {
  //getting a randome text from the json file
  const [state] = useState(Paras[Math.floor(Math.random() * Paras.length)]);
  // the text typed
  const [typed, setTyped] = useState("");
  //the index...
  const [index, setIndex] = useState(0);
  // the number of correct chars
  let uncorrect = 0;
  // the number of uncorrect chars
  let correct = 0;
  // an indecator for starting the countdown
  const [startCount, setStartCount] = useState(false);
  // an indecator for stopping the writing
  const [disableInput, setDisableInput] = useState(false);

  // a function that returns the class name for the span
  const getClass = (char, i) => {
    let classStr = "";
    if (i === index) {
      // if the span is the char to be written
      classStr += "active";
    }
    if (typed?.charAt(i) === char) {
      // if the wrten char is correct
      classStr += "correct";
      correct++;
    } else if (i < index) {
      // if the written char is uncorrect
      classStr += "false";
      uncorrect++;
    }
    return classStr;
  };

  return (
    <div className="App">
      <Header />
      <input
        className="hedden-input"
        type={"text"}
        autoFocus={true}
        onBlur={({ target }) => target.focus()}
        disabled={disableInput}
        onChange={(e) => {
          if (!startCount) {
            setStartCount(true);
          }
          setIndex(e.currentTarget.value.split("").length);
          setTyped(e.currentTarget.value);
        }}
      />

      <div className="container">
        {startCount && <Timer time={60} setDisableInput={setDisableInput} />}

        <p className="typed-text">
          {state.split("").map((char, i) => (
            <>
              {(i < 350 || index > 340) && (
                <span className={getClass(char, i)}>{char}</span>
              )}
            </>
          ))}
        </p>

        {disableInput && (
          <Result
            charsTyped={typed.length}
            uncorrect={uncorrect}
            correct={correct}
            timeInMin={1}
          />
        )}

        <div
          className="shortcut-restart"
          onClick={() => window.location.reload()}
        >
          {" "}
          Press CTRL + R to restart
        </div>
      </div>
      <StyleChoosing />
      <Footer />
    </div>
  );
}
