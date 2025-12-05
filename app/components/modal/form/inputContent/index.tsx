import Input from "../input";
import TextArea from "../textarea";

interface FormContentProps {
  title: string;
  name: string;
  value: string;
  placeholder: string;
  type?: "input" | "textarea";
}

const FormContent = ({
  title,
  name,
  value,
  placeholder,
  type = "input",
}: FormContentProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="heading-m text-MediumGrey dark:text-White">
        {title}
      </label>
      {type === "textarea" ? (
        <TextArea name={name} value={value} placeholder={placeholder} />
      ) : (
        <Input name={name} value={value} placeholder={placeholder} />
      )}
    </div>
  );
};

export default FormContent;
