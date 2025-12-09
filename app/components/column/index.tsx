import { RootState } from "@/app/redux/store";
import { Column as ColumnTyps } from "@/app/types";
import { useSelector } from "react-redux";
import Task from "../task";

interface ColumnProps {
  column: ColumnTyps;
}
const Column = ({ column }: ColumnProps) => {
  const { tasks } = useSelector((state: RootState) => state.taskReducer);

  // console.log(boards, "boards");
  // console.log(tasks, "tasks");
  // console.log(id, "id");
  // console.log(column, "column");

  const task = tasks.filter((task) => task.boardId === column.boardId && task.columnId === column.id);

  return (
    <div className="min-w-70 max-w-[280px] flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <div
          className="min-w-[15px] h-[15px] rounded-full "
          style={{ backgroundColor: `${column.color}` }}
        ></div>
        <h3 className="heading-s text-MediumGrey">
          {column.name} ({task.length})
        </h3>
      </div>

      <div className="flex flex-col gap-5">
        {task.map((item) => (
          <Task item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Column;
