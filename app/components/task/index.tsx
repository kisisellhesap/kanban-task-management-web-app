"use client";
import { changeModalContent, openModal } from "@/app/redux/slices/modalSlice";
import { AppDispatch } from "@/app/redux/store";
import { Task as TaskProp } from "@/app/types";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface TaskProps {
  item: TaskProp;
}
const Task = ({ item }: TaskProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const isCompleted = item.subtasks.filter((subtask) => subtask.isCompleted === true);

  const viewTask = () => {
    dispatch(openModal());
    dispatch(changeModalContent("view_task"));
  };
  return (
    <Link
      href={`?taskId=${item.id}`}
      className="px-4 py-[23px] rounded-lg flex flex-col gap-2 bg-White dark:bg-DarkGrey group cursor-pointer shadow-custom-light shadow-custom-dark"
      onClick={viewTask}
    >
      <p className="heading-m text-black dark:text-White line-clamp-1 group-hover:text-MainPurple">
        {item.name}
      </p>
      <span className="font-bold text-[12px] text-MediumGrey">
        {isCompleted.length} of {item.subtasks.length} substasks
      </span>
    </Link>
  );
};

export default Task;
