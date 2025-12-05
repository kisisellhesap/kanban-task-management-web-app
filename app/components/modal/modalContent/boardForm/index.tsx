import Button from "@/app/components/button";
import Form from "../../form";
import CustomContent from "../../form/customContent";
import InputContent from "../../form/inputContent";

const BoardForm = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <Form onSubmit={submitHandler}>
      <h4 className="text-black dark:text-White heading-xl">Add New Board</h4>
      <InputContent title="Name" name={"name"} value={""} placeholder={""} />

      <CustomContent />

      <Button type="primary" size="S" text="Create New Board" width="100%" />
    </Form>
  );
};

export default BoardForm;
