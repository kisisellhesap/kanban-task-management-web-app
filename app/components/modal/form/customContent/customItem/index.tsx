import { Column, Subtask } from "@/app/types";
import Input from "../../input";
import { FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import {
  deleteColumn,
  setColumnColor,
  setColumnName,
} from "@/app/redux/slices/serverState-FETCH/board/boardSlice";
import { ChangeEvent } from "react";
import {
  deleteSubtask,
  setsubtaskName,
} from "@/app/redux/slices/serverState-FETCH/task/taskSlice";

interface CustomItemProps {
  item: Column | Subtask;
  type: string;
}
const CustomItem = ({ item, type }: CustomItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const setNameColumnOrSubTask = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === "board") {
      dispatch(
        setColumnName({
          columnId: item.id,
          newName: e.target.value,
        })
      );
    } else {
      dispatch(
        setsubtaskName({
          subtaskId: item.id,
          newName: e.target.value,
        })
      );
    }
  };
  const deleteColumnOrSubTask = () => {
    if (type === "board") {
      dispatch(deleteColumn(item.id));
    } else {
      dispatch(deleteSubtask(item.id));
    }
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (e.target.value) {
      console.log("true");
    } else {
      console.log("false");
    }
    dispatch(
      setColumnColor({
        columnId: item.id,
        columnColor: e.target.value,
      })
    );
  };
  return (
    <div className="flex items-center gap-4">
      {type === "board" && (
        <input
          type="color"
          value={item.color}
          onChange={handleColorChange}
          className="w-10 h-10"
        />
      )}

      <Input
        name="name"
        value={item.name}
        placeholder="we.g. Web Design"
        onChange={setNameColumnOrSubTask}
      />
      <button type="button" onClick={deleteColumnOrSubTask}>
        <FaXmark className="text-MediumGrey w-6 h-6" />
      </button>
    </div>
  );
};

export default CustomItem;
