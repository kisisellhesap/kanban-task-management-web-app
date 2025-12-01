import { ButtonVariant } from "../constant/cssVariants/buttonVariants";
import { FaP, FaPlus } from "react-icons/fa6";

interface ButtonProps {
  type: "primary" | "secondary" | "destructive";
  size: "L" | "S";
  text: string;
  width?: string;
}
const Button = ({
  type = "primary",
  size = "L",
  text,
  width = "255px",
}: ButtonProps) => {
  return (
    <button
      className={`w-full flex max-md:w-12 max-md:h-8 items-center justify-center ${ButtonVariant.type[type]} ${ButtonVariant.size[size]}`}
      style={{ maxWidth: `${width}` }}
    >
      <FaPlus className="w-3 h-3 hidden max-md:block" />
      <span className="max-md:hidden">{text}</span>
    </button>
  );
};

export default Button;
