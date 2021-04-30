import React from "react";
import { Example } from "./components";
import { useDI } from "./react-di";
import { IDIContainer } from "./types";

import "./styles.css";

export default function App() {
  const log = useDI<IDIContainer>("log");
  log("Inside App component");

  return (
    <main className="App">
      <h1>FEM Layers PoC Example</h1>
      <div className="Grid">
        <section className="Navbar">
          <Example>Navbar</Example>
        </section>
        <section className="Sidebar">
          <Example>Sidebar</Example>
        </section>
        <section className="Left">
          <Example>Right</Example>
        </section>
        <section className="Right">
          <Example>Left</Example>
        </section>
        <section className="Main">
          <Example>Main</Example>
        </section>
        <section className="Footer">
          <Example>Footer</Example>
        </section>
      </div>
    </main>
  );
}
