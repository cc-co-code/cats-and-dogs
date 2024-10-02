import "./App.css";

export default function App() {
  function handleClick() {
    console.log("Click Me!");
  }
  return (
    <Button
      color={"green"}
      disabled={false}
      text="Click Me!"
      onClick={handleClick}
    />
  );
}

export function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{
        height: "100px",
        color: color,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
