import { ChangeEvent } from "react";
import Input from "../input";
import TextArea from "../textarea";

interface FormContentProps {
  title: string;
  name: string;
  value: string;
  placeholder: string;
  type?: "input" | "textarea";
  onChangeName?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormContent = ({
  title,
  name,
  value,
  placeholder,
  type = "input",
  onChangeName,
  onChangeDescription,
}: FormContentProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="heading-m text-MediumGrey dark:text-White">
        {title}
      </label>
      {type === "textarea" ? (
        <TextArea
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChangeDescription}
        />
      ) : (
        <Input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChangeName}
        />
      )}
    </div>
  );
};

export default FormContent;
