import "./App.css";

export default function App() {
  return <Sum valueA={5} valueB={7} />;
}

export function Sum({ valueA, valueB }) {
  return (
    <p>
      {valueA} + {valueB}={valueA + valueB}
    </p>
  );
}
