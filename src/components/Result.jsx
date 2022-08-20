import "../styles.css";

const Result = ({ charsTyped, uncorrect, correct, timeInMin }) => {
  const grossWPM = Math.round(charsTyped / 5 / timeInMin);
  const netWPM = Math.round((grossWPM - uncorrect) / timeInMin);
  const CPM = Math.round((charsTyped - uncorrect) / timeInMin);
  const accuracy = Math.round((correct / charsTyped) * 100);

  return (
    <div className="result">
      <span className="lable">
        {" "}
        WPM (words/min):{" "}
        <span className="result-number">{netWPM >= 0 ? netWPM : 0}</span>{" "}
      </span>
      <span className="lable">
        {" "}
        CPM (chars/min): <span className="result-number"> {CPM} </span>
      </span>
      <span className="lable">
        {" "}
        Accuracy: <span className="result-number"> %{accuracy} </span>{" "}
      </span>
      <span style={{ marginTop: 25 }}>
        {" "}
        The average typing speed is around{" "}
        <span className="result-number">40</span> words per minute. your result
        is <span className="result-number"> {netWPM >= 0 ? netWPM : 0} </span>{" "}
        which is {netWPM > 40 ? "more than" : "less than"} the average by{" "}
        <span className="result-number">{Math.abs(netWPM - 40)}</span>{" "}
      </span>
    </div>
  );
};

export default Result;
