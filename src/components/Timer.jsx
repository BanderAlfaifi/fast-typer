import { useEffect, useState } from "react";
import "../styles.css";

const Timer = ({ time, setDisableInput }) => {
  const [counter, setCounter] = useState(time);
  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);
  return (
    <span className="countdown">
      {counter === 0 && setDisableInput(true)}
      {counter} s
    </span>
  );
};

export default Timer;
