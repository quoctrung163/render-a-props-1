import React from "react";
import "./styles.css";
import List from "./components/List";

export default function App() {
  const data = ["A", "B", "C"];
  return (
    <div className="App">
      <List data={data} render={item => <div>{item}</div>} />
      <List data={data} render={item => <div>-{item}</div>} />
    </div>
  );
}
