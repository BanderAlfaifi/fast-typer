const StyleChoosing = () => {
  const changestyle1 = () => {
    document.documentElement.style.setProperty("--background-color", "#100b11");
    document.documentElement.style.setProperty("--primary-color", "#d11686");
    document.documentElement.style.setProperty("--secondry-color", "#fff");
    document.documentElement.style.setProperty("--mistake-color", "#952033");
    document.documentElement.style.setProperty(
      "--correct-color",
      "rgb(123, 167, 37)"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      "rgb(184, 183, 183)"
    );
    document.documentElement.style.setProperty(
      "--letter-to-be-written-color",
      "#5b4c4d"
    );
  };

  const changestyle2 = () => {
    document.documentElement.style.setProperty(
      "--background-color",
      "darkslategray"
    );
    document.documentElement.style.setProperty(
      "--primary-color",
      "rgb(233, 131, 21)"
    );
    document.documentElement.style.setProperty("--secondry-color", "#fff");
    document.documentElement.style.setProperty("--mistake-color", "crimson");
    document.documentElement.style.setProperty("--correct-color", "#2d87");
    document.documentElement.style.setProperty(
      "--text-color",
      "rgb(184, 183, 183)"
    );
    document.documentElement.style.setProperty(
      "--letter-to-be-written-color",
      "black"
    );
  };

  const changestyle3 = () => {
    document.documentElement.style.setProperty("--background-color", "#EEEED8");
    document.documentElement.style.setProperty("--primary-color", "#9100DA");
    document.documentElement.style.setProperty("--secondry-color", "#F28500");
    document.documentElement.style.setProperty("--mistake-color", "crimson");
    document.documentElement.style.setProperty("--correct-color", "#0079F2");
    document.documentElement.style.setProperty("--text-color", "#121212");
    document.documentElement.style.setProperty(
      "--letter-to-be-written-color",
      "black"
    );
  };

  return (
    <div className="style-choosing">
      <button onClick={() => changestyle1()}> Night style (Default) </button>
      <button onClick={() => changestyle2()}> Dark Slate Gray </button>
      <button onClick={() => changestyle3()}> Light style </button>
    </div>
  );
};

export default StyleChoosing;
