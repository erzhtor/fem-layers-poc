import { render } from "react-dom";

import { createDIContainer } from "./react-di";
import { IDIContainer } from "./types";
import App from "./App";

const DIUtilityContainer = createDIContainer<IDIContainer>({
  log: console.warn,
  fetch: (url) => "response"
});

const DIDomainContainer = createDIContainer<IDIContainer>({
  log: console.warn,
  fetch: (url) => "response"
});

const rootElement = document.getElementById("root");
render(
  <DIUtilityContainer>
    <DIDomainContainer>
      <App />
    </DIDomainContainer>
  </DIUtilityContainer>,
  rootElement
);
