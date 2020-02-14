import React from "react";
import "./styles.css";
import List from "./components/List";
import Counter from "./components/Counter";

export default function App() {
  const data = ["A", "B", "C"];
  return (
    <div className="App">
      <List data={data} render={item => <div>{item}</div>} />
      <List data={data} render={item => <div>-{item}</div>} />
      <Counter>{count => <h1>{count}</h1>}</Counter>
    </div>
  );
}
