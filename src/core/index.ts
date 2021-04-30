import { inject } from "../react-di";
import { IDIContainer } from "../types";

function fetchUser() {
  const log = inject<IDIContainer>("log");
}
