import { ReactNode } from "react";
import { ButtonVariant } from "../constant/cssVariants/buttonVariants";

interface ButtonProps {
  buttonType?: "button" | "submit" | "reset";
  type: "primary" | "secondary" | "destructive";
  size: "L" | "S";
  text: string;
  width?: string;
  icon?: ReactNode;
  onClick?: () => void;
}
const Button = ({
  buttonType = "button",
  type = "primary",
  size = "L",
  text,
  width = "255px",
  icon,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={buttonType}
      className={`w-full flex  items-center  justify-center ${
        icon && "max-md:h-8  max-md:w-12"
      } ${ButtonVariant.type[type]} ${ButtonVariant.size[size]}`}
      style={{ maxWidth: `${width}` }}
      onClick={onClick}
    >
      {icon && icon}
      <span className={`${icon && "max-md:hidden"}`}>{text}</span>
    </button>
  );
};

export default Button;
