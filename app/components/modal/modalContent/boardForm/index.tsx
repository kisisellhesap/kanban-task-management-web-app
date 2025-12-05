import Button from "@/app/components/button";
import Form from "../../form";
import CustomContent from "../../form/customContent";
import InputContent from "../../form/inputContent";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import FormContent from "../../form/inputContent";

const BoardForm = () => {
  const { modalContent } = useSelector(
    (state: RootState) => state.modalReducer
  );

  const isEditMode = modalContent === "edit_board";

  console.log(modalContent);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Form onSubmit={submitHandler}>
      <h4 className="text-black dark:text-White heading-xl">
        {isEditMode ? "Edit Board" : "Add New Board"}
      </h4>

      <FormContent title="Name" name={"name"} value={""} placeholder={""} />

      <CustomContent type="board" />

      <Button
        buttonType="submit"
        type="primary"
        size="S"
        text={isEditMode ? "Save Changes" : "Create New Board"}
        width="100%"
      />
    </Form>
  );
};

export default BoardForm;
