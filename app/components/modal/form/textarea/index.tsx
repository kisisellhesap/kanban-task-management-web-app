import { ChangeEvent } from "react";

interface TextAreaProps {
  name: string;
  value?: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextArea = ({ name, value, placeholder, onChange }: TextAreaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="body-l text-black dark:text-white rounded-sm px-4 py-2 border outline-MainPurple border-Border/25 w-full resize-none min-h-25"
      required
    />
  );
};

export default TextArea;
