import "./App.css";
import { useState } from "react";

export default function App() {
  //let count = 0;
  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <p>{count}</p>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
          console.log("Button clicked, count is now: ", count + 1);
        }}
      >
        + 1 (current: {count})
      </button>
      <button
        type="button"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        - 1
      </button>
    </div>
  );
}
