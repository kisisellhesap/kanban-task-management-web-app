import { Column, Subtask } from "@/app/types";
import Input from "../../input";
import { FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { deleteColumn, setColumnColor, setColumnName } from "@/app/redux/slices/boardFormSlice";
import { deleteSubTask, setSubTaskName } from "@/app/redux/slices/taskFormSlice";

interface CustomItemProps {
  item: Column | Subtask;
  type: string;
}
const CustomItem = ({ item, type }: CustomItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex items-center gap-4">
      {type === "board" && (
        <input
          type="color"
          value={item.color}
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(
              setColumnColor({
                color: e.target.value,
                id: item.id,
              })
            );
          }}
          className="w-10 h-10"
        />
      )}

      <Input
        name="name"
        value={item.name}
        placeholder="we.g. Web Design"
        onChange={(e) => {
          if (type === "board") {
            dispatch(
              setColumnName({
                name: e.target.value,
                id: item.id,
              })
            );
          } else {
            dispatch(
              setSubTaskName({
                name: e.target.value,
                id: item.id,
              })
            );
          }
        }}
      />
      <button
        type="button"
        onClick={() => {
          if (type === "board") {
            dispatch(deleteColumn(item.id));
          } else {
            dispatch(deleteSubTask(item.id));
          }
        }}
      >
        <FaXmark className="text-MediumGrey w-6 h-6" />
      </button>
    </div>
  );
};

export default CustomItem;
