import Button from "@/app/components/button";
import { closeModal } from "@/app/redux/slices/clientState-UI/modalSlice";
import { AppDispatch } from "@/app/redux/store";
import { useDispatch } from "react-redux";

interface AreYouSureProps {
  type: "task" | "board";
}

const AreYouSure = ({ type }: AreYouSureProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const deleteSomething = (type: string) => {
    if (type === "task") {
      console.log("deleted task");
    } else {
      console.log("deleted board");
    }

    dispatch(closeModal());
  };
  const cancelDelete = () => {
    console.log("cancelled delete");
    dispatch(closeModal());
  };

  const Task = { name: "task name" };
  const Board = { name: "board name" };
  return (
    <div className="bg-White dark:bg-DarkGrey rounded-md flex flex-col gap-6 p-8 w-full max-w-[480px]">
      <h3 className="heading-l text-Red">
        {type === "task" ? "Delete this task ?" : "Delete this board ?"}
      </h3>

      <p className="text-body-l text-MediumGrey">
        {type === "task"
          ? `Are you sure you want to delete the "${Task.name}" task and its subtasks? This action cannot be reversed.`
          : `Are you sure you want to delete the "${Board.name}" board? This action will remove all columns and tasks and cannot be reversed.`}
      </p>
      <div className="flex gap-4">
        <Button
          type="destructive"
          size="L"
          text="Delete"
          width="200"
          onClick={() => deleteSomething(type)}
        />
        <Button
          type="secondary"
          size="L"
          text="Cancel"
          width="200"
          onClick={cancelDelete}
        />
      </div>
    </div>
  );
};

export default AreYouSure;
