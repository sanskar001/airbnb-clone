import { FC, MouseEvent } from "react";

export interface ButtonProps {
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({}) => {
  return <button></button>;
};

export default Button;
