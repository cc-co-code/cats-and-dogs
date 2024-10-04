import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1289,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2378,
      name: "🥥 Coconut",
      color: "white",
    },
    {
      id: 1337,
      name: " 🍓 Strawberry",
      color: "red",
    },
    {
      id: 3456,
      name: "🫐 Blueberry",
      color: "blue",
    },
    {
      id: 5747,
      name: "🍊 Orange",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      <Card name="🍌 banana" />
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>Card name={fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}
