import { render } from "react-dom";

import { createDIContainer } from "./react-di";
import { IDIContainer } from "./types";
import App from "./App";

const DIContainer = createDIContainer<IDIContainer>({
  log: console.log,
  fetch: (url) => "response"
});

const rootElement = document.getElementById("root");
render(
  <DIContainer>
    <App />
  </DIContainer>,
  rootElement
);
