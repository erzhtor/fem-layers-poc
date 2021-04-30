import { FC } from "react";
import { useDI } from "../react-di";
import { IDIContainer } from "../types";

export const Example: FC = ({ children }) => {
  const log = useDI<IDIContainer>("log");

  log("Inside Example");
  return <div>{children}</div>;
};
