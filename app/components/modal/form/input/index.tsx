interface InputProps {
  name: string;
  value?: string;
  placeholder: string;
}
const Input = ({ name, value, placeholder }: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      className="body-l text-black dark:text-white rounded-sm px-4 py-2 border outline-MainPurple border-Border/25 w-full"
      required
    />
  );
};

export default Input;
