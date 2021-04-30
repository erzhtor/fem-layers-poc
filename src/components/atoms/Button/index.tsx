import { FC } from "react";

type ButtonProps = {
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);
