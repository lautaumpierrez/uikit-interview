import React from "react";
import { Brand, Type } from "../../types/Theme.types";

export interface ButtonProps {
  type?: Type;
  brand?: Brand;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
