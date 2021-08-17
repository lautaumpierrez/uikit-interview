import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import "../../tailwind.css";


const Button: FC<ButtonProps> = ({
  type = "primary",
  brand = "square",
  disabled = false,
  onClick = (event: React.MouseEvent<HTMLButtonElement>) => {},
  children
}) => {

  const isPrimary = type === "primary";
  
  
  // ? setting the border radius on rounded brand case.
  const rounded = brand === "rounded" ? "rounded-full" : "";
  
  // ? setting the initial color using the type prop
  const color = isPrimary ?  
    "bg-primary text-white disabled:bg-terciary" :  // ? primary case
    "border border-gray-200 disabled:bg-gray-200 bg-white disabled:text-gray-600"; // ? secondary case

  const className = `py-3 px-10  ${rounded} ${color}`;

  return <button data-testid="button" onClick={onClick} className={className} disabled={disabled}>{children}</button>;
};

export default Button;
