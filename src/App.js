import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [widthh, setWidth] = useState(0);
  const [loadColor, setLoadColor] = useState(0);
  const [secondLoader, setSecondLoader] = useState(0);

  const widthFunc = (e) => {
    if (!e.target.value) {
      setWidth(0);
      setLoadColor(0);
    } else if (e.target.value < 0) {
      setWidth(0);
      setLoadColor(0);
    } else if (e.target.value > 100) {
      setWidth(100);
      setLoadColor(100);
    } else {
      setWidth(e.target.value);
      setLoadColor(e.target.value);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondLoader((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 0;
        }
        return prev + 2;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="number" min={0} max={100} onChange={widthFunc} />
      <div className="input_bar">
        <div
          className="input_component"
          style={{
            width: `${
              loadColor == 1 || loadColor == 2 || loadColor == 3
                ? setLoadColor(4)
                : loadColor
            }%`,
          }}
        >
          {widthh}%
        </div>
      </div>
      <div className="input_bar">
        <div
          style={{
            width: `${secondLoader}%`,
          }}
        >
          {secondLoader}%
        </div>
      </div>
    </div>
  );
}
