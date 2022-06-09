import { useState } from "react";
import "./styles.css";

export default function App() {
  const [deger, setDeger] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        <button
          onClick={() => {
            setDeger(deger + 1);
          }}
        >
          Sayıyı arttır
        </button>
      </h2>
      <p>{deger}</p>
      <h2>
        <button
          onClick={() => {
            setDeger(deger - 1);
          }}
        >
          Sayıyı azalt
        </button>
      </h2>
    </div>
  );
}
