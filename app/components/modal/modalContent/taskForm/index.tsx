import { useSelector } from "react-redux";
import Form from "../../form";
import { RootState } from "@/app/redux/store";
import InputContent from "../../form/inputContent";
import CustomContent from "../../form/customContent";
import Button from "@/app/components/button";
import FormContent from "../../form/inputContent";
import CurrentStatus from "../../currentStatus";

const TaskForm = () => {
  const { modalContent } = useSelector(
    (state: RootState) => state.modalReducer
  );

  const isEditMode = modalContent === "edit_task";

  console.log(modalContent);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Form onSubmit={submitHandler}>
      <h4 className="text-black dark:text-White heading-xl">
        {isEditMode ? "Edit Task" : "Add New Task"}
      </h4>

      <FormContent
        title="Name"
        name={"name"}
        value={""}
        placeholder={"e.g. Take coffee break"}
      />

      <FormContent
        type="textarea"
        title="Description"
        name={"description"}
        value={""}
        placeholder={
          "e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        }
      />
      <CustomContent type="task" />

      <CurrentStatus />
      <Button
        buttonType="submit"
        type="primary"
        size="S"
        text={isEditMode ? "Save Changes" : "Create New Task"}
        width="100%"
      />
    </Form>
  );
};

export default TaskForm;
