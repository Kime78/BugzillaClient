import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./components/product";
import type { BugProduct } from "./components/product";

const exampleProduct: BugProduct = {
  name: "Sample Product",
  components: [
    {
      id: 1,
      name: "Component A",
      assignedTo: "User1",
      description: "This is a sample component.",
      isActive: true,
    },
    {
      id: 1,
      name: "Component A",
      assignedTo: "User1",
      description: "This is a sample component.",
      isActive: true,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product product={exampleProduct}></Product>
      </header>
    </div>
  );
}

export default App;
