import { ReactNode } from "react";
import { ButtonVariant } from "../constant/cssVariants/buttonVariants";

interface ButtonProps {
  type: "primary" | "secondary" | "destructive";
  size: "L" | "S";
  text: string;
  width?: string;
  icon?: ReactNode;
}
const Button = ({
  type = "primary",
  size = "L",
  text,
  width = "255px",
  icon,
}: ButtonProps) => {
  return (
    <button
      className={`w-full flex max-md:w-12 max-md:h-8 items-center justify-center ${ButtonVariant.type[type]} ${ButtonVariant.size[size]}`}
      style={{ maxWidth: `${width}` }}
    >
      {icon && icon}
      <span className="max-md:hidden">{text}</span>
    </button>
  );
};

export default Button;
