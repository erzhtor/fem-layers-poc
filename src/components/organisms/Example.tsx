import { FC } from "react";
import { useInject } from "../../react-di";
import { IDIContainer } from "../../types";

export const Example: FC = ({ children }) => {
  const log = useInject<IDIContainer>("log");

  log("Inside Example");
  return <div>{children}</div>;
};
