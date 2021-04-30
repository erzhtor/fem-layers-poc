import React from "react";
import { Example } from "./components";
import { useInject } from "./react-di";
import { IDIContainer } from "./types";

import "./styles.css";

export default function App() {
  const log = useInject<IDIContainer>("log");
  log("Inside App component");

  return (
    <main className="App">
      <p>FEM Layers PoC Example</p>
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
