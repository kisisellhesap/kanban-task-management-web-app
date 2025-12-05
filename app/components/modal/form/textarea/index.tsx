interface TextAreaProps {
  name: string;
  value?: string;
  placeholder: string;
}
const TextArea = ({ name, value, placeholder }: TextAreaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      value={value}
      className="body-l text-black dark:text-white rounded-sm px-4 py-2 border outline-MainPurple border-Border/25 w-full resize-none min-h-20"
      required
    />
  );
};

export default TextArea;
