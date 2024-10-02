import "./App.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main>
      <Boxes />
    </main>
  );
}

export function Boxes() {
  return (
    <>
      <main className={"flex-container"}>
        <Box color="#007bff" />
        <Box color="#fc3" />
        <Box color="#ff3333" />
      </main>
    </>
  );
}
