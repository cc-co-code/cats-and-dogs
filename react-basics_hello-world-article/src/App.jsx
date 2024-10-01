import "./App.css";

export default function App() {
  return <HelloWorldArticle />;
}

export function HelloWorldArticle() {
  return (
    <>
      {" "}
      <h1>Article</h1>
      <p>This is an article about the weather</p>
    </>
  );
}
