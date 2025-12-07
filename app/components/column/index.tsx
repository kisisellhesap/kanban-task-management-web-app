import { Column as ColumnTyps } from "@/app/types";
import Task from "../task";

interface ColumnProps {
  column: ColumnTyps;
}
const Column = ({ column }: ColumnProps) => {
  return (
    <div className="min-w-70 flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <div
          className="w-[15px] h-[15px] rounded-full "
          style={{ backgroundColor: `${column.color}` }}
        ></div>
        <h3 className="heading-s  text-MediumGrey">
          {column.name} ({column.tasks.length})
        </h3>
      </div>

      <div className="flex flex-col gap-5">
        <Task />
      </div>
    </div>
  );
};

export default Column;
