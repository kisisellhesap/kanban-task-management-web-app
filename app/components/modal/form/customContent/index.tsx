import Button from "@/app/components/button";
import CustomItem from "./customItem";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { addColumn } from "@/app/redux/slices/serverState-FETCH/board/boardSlice";
import { Column, Subtask } from "@/app/types";
import { addSubtask } from "@/app/redux/slices/serverState-FETCH/task/taskSlice";

interface CustomContentProps {
  type: "board" | "task";
  childData: Column[] | Subtask[];
}

const CustomContent = ({ type, childData }: CustomContentProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const addColumnOrSubTask = () => {
    if (type === "board") {
      dispatch(
        addColumn({
          id: crypto.randomUUID(),
          name: "",
          tasks: [],
          color: "#000000",
        })
      );
    } else {
      dispatch(
        addSubtask({
          id: crypto.randomUUID(),
          name: "",
          subTasks: [],
        })
      );
    }
  };

  console.log(childData);
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
