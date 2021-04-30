import { FC } from "react";
import { Button } from "../../atoms/Button";

type SearchbarProps = {
  placeholder?: string;
};

export const Searchbar: FC<SearchbarProps> = ({ placeholder = "Search" }) => (
  <div>
    <input placeholder={placeholder} />
    <Button>Search</Button>
  </div>
);
