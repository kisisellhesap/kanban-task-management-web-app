import { setSubTaskCompleted } from "@/app/redux/slices/taskSlice";
import { AppDispatch } from "@/app/redux/store";
import { Subtask } from "@/app/types";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";

interface SubTaskItemProps {
  sub: Subtask;
}
const SubTaskItem = ({ sub }: SubTaskItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      className="rounded-sm bg-LightGreyBG dark:bg-VeryDarkGrey flex items-center gap-4 p-[13px] hover:bg-HoverMainPurple/25 dark:hover:bg-MainPurple/25 cursor-pointer"
      onClick={() => {
        dispatch(setSubTaskCompleted(sub));
      }}
    >
      <div
        className={`min-w-4 min-h-4 rounded-xs  border border-Border/25  ${
          sub.isCompleted ? "flex items-center justify-center bg-MainPurple" : "bg-White dark:bg-DarkGrey"
        }`}
      >
        {sub.isCompleted && <FaCheck className="text-White w-2 " />}
      </div>
      <p
        className={` font-bold text-[12px] ${
          sub.isCompleted ? "line-through text-MediumGrey" : "text-black dark:text-white"
        }`}
      >
        {sub.name}
      </p>
    </div>
  );
};

export default SubTaskItem;
