import "./App.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

export function Smiley({ isHappy }) {
  return <p>{isHappy ? "😊" : "😢"} </p>;
}
