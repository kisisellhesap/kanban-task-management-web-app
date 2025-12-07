import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import CustomContent from "../../form/customContent";
import Button from "@/app/components/button";
import FormContent from "../../form/formContent";
import CurrentStatus from "../../currentStatus";
import { ChangeEvent } from "react";
import {
  setDescription,
  setName,
} from "@/app/redux/slices/serverState-FETCH/task/taskSlice";

const TaskForm = () => {
  const { modalContent } = useSelector(
    (state: RootState) => state.modalReducer
  );
  const { taskForm } = useSelector((state: RootState) => state.taskReducer);

  const dispatch = useDispatch<AppDispatch>();

  const isEditMode = modalContent === "edit_task";

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", taskForm);
  };
  const setNameFn = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };
  const setDescriptionFn = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setDescription(e.target.value));
  };

  return (
    <form
      className="rounded-md p-8 bg-White dark:bg-DarkGrey flex flex-col gap-6 shadow-custom-light shadow-custom-dark"
      onSubmit={submitHandler}
    >
      <h4 className="text-black dark:text-White heading-xl">
        {isEditMode ? "Edit Task" : "Add New Task"}
      </h4>

      <FormContent
        title="Name"
        name={"name"}
        value={taskForm.name}
        placeholder={"e.g. Take coffee break"}
        onChangeName={setNameFn}
      />

      <FormContent
        type="textarea"
        title="Description"
        name={"description"}
        value={taskForm.description}
        placeholder={
          "e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        }
        onChangeDescription={setDescriptionFn}
      />
      <CustomContent type="task" childData={taskForm.subtasks} />

      <CurrentStatus />
      <Button
        buttonType="submit"
        type="primary"
        size="S"
        text={isEditMode ? "Save Changes" : "Create New Task"}
        width="100%"
      />
    </form>
  );
};

export default TaskForm;
