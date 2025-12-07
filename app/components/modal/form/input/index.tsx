import { ChangeEvent } from "react";

interface InputProps {
  name: string;
  value?: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ name, value, placeholder, onChange }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      className="body-l text-black dark:text-white rounded-sm px-4 py-2 border outline-MainPurple border-Border/25 w-full"
      onChange={onChange}
      required
    />
  );
};

export default Input;
