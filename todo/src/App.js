import React from "react";
import "./App.css";
// Importing Components
import Form from "./components/Form";
function App() {
  console.log("hi");
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
        <Form></Form>
      </header>
    </div>
  );
}

export default App;
