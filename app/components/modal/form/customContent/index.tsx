import Button from "@/app/components/button";
import CustomItem from "./customItem";
import { Column, Subtask } from "@/app/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { addColumn } from "@/app/redux/slices/boardFormSlice";
import { addSubTask } from "@/app/redux/slices/taskFormSlice";

interface CustomContentProps {
  type: "board" | "task";
  childData: Column[] | Subtask[];
}

const CustomContent = ({ type, childData }: CustomContentProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { form } = useSelector((state: RootState) => state.boardFormReducer);
  const addColumnOrSubTask = () => {
    if (type === "board") {
      dispatch(
        addColumn({
          boardId: form.id,
          id: crypto.randomUUID(),
          name: "",
          color: "#000000",
          tasks: [],
        })
      );
    } else {
      dispatch(
        addSubTask({
          id: crypto.randomUUID(),
          name: "",
          isCompleted: false,
        })
      );
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <label className="heading-m text-MediumGrey dark:text-White">
        {type === "board" ? "Columns" : "Subtasks"}
      </label>
      <div className="flex flex-col gap-3 max-h-[94px] overflow-y-auto pr-5">
        {childData.map((item, i) => (
          <CustomItem key={i} item={item} type={type} />
        ))}
      </div>
      <Button
        type="secondary"
        size="S"
        text={`+ Add New ${type === "board" ? "Column" : "Subtask"}`}
        width="100%"
        onClick={addColumnOrSubTask}
      />
    </div>
  );
};

export default CustomContent;
