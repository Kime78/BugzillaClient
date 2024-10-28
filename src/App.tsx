import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./components/product";
import type { BugProduct } from "./components/product";
import ProductList from "./components/productList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductList bugzillaURL="https://bugzilla.kernel.org"></ProductList>
      </header>
    </div>
  );
}

export default App;
