import Input from "../input";

interface InputTextProps {
  title: string;
  name: string;
  value: string;
  placeholder: string;
}

const InputContent = ({ title, name, value, placeholder }: InputTextProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="heading-m text-MediumGrey dark:text-White">
        {title}
      </label>
      <Input name={name} value={value} placeholder={placeholder} />
    </div>
  );
};

export default InputContent;
