import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import CustomContent from "../../form/customContent";
import Button from "@/app/components/button";
import FormContent from "../../form/formContent";
import CurrentStatus from "../../currentStatus";
import { closeModal } from "@/app/redux/slices/modalSlice";
import { resetForm, setDescription, setName, updateForm } from "@/app/redux/slices/taskFormSlice";
import { chooseContentForModal } from "@/app/constant/modalContentType";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { addTask, editTask } from "@/app/redux/slices/taskSlice";
import { useRouter } from "next/navigation";

const TaskForm = () => {
  const { modalContent } = useSelector((state: RootState) => state.modalReducer);
  const { form } = useSelector((state: RootState) => state.taskFormReducer);
  const { tasks } = useSelector((state: RootState) => state.taskReducer);
  const dispatch = useDispatch<AppDispatch>();

  const id = useSearchParams().get("taskId");
  const router = useRouter();

  const item = tasks.find((item) => item.id === id);
  const isEditMode = modalContent === "edit_task";

  useEffect(() => {
    if (modalContent === chooseContentForModal.edit_task) {
      dispatch(
        updateForm({
          ...item,
        })
      );
    }
  }, [modalContent, dispatch, item]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", form);

    if (modalContent === chooseContentForModal.edit_task) {
      dispatch(editTask(form));
      toast.success("Task updated succesfuly");
      router.push(`/boards/${item?.boardId}`);
    }
    if (modalContent === chooseContentForModal.add_task) {
      dispatch(addTask(form));
      toast.success("Task created succesfuly");
    }
    dispatch(closeModal());
    dispatch(resetForm());
  };

  return (
    <form
      className="rounded-md p-8 bg-White dark:bg-DarkGrey flex flex-col gap-6 shadow-custom-light shadow-custom-dark"
      onSubmit={submitHandler}
    >
      <h4 className="text-black dark:text-White heading-xl">{isEditMode ? "Edit Task" : "Add New Task"}</h4>

      <FormContent
        title="Name"
        name={"name"}
        value={form.name}
        placeholder={"e.g. Take coffee break"}
        onChangeName={(e) => {
          dispatch(setName(e.target.value));
        }}
      />

      <FormContent
        type="textarea"
        title="Description"
        name={"description"}
        value={form.description}
        placeholder={
          "e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
        }
        onChangeDescription={(e) => {
          dispatch(setDescription(e.target.value));
        }}
      />
      <CustomContent type="task" childData={form.subtasks} />

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
