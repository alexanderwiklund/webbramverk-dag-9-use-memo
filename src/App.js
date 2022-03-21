import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [counter, setCounter] = useState(0);

  const theme = {
    color: dark ? "white" : "black",
    backgroundColor: dark ? "black" : "white",
  };

  const double = (number) => {
    for (let i = 0; i < 1000000000; i++) {}
    return number * 2;
  };

  // Kommer köras varje gång App-komponenten körs igen,
  // oavsett vilket state vi uppdaterar.
  // const number = double(counter);

  // Kommer bara köras när counter ändras
  const number = useMemo(() => {
    return double(counter);
  }, [counter]);

  return (
    <div className="App">
      <input
        value={counter}
        onChange={(event) => setCounter(event.target.value)}
      ></input>
      <button onClick={() => setCounter(double(counter))}>DOUBLE NUMBER</button>
      <button onClick={() => setDark((previous) => !previous)}>
        CHANGE THEME
      </button>
      <div style={theme}>{counter}</div>
      <div>{number}</div>
    </div>
  );
}

export default App;
