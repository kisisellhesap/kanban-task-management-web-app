import { useSearchParams } from "next/navigation";
import SubTaskItem from "./subtaskItem";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";

const SubTasks = () => {
  const params = useSearchParams().get("taskId");

  const { tasks } = useSelector((state: RootState) => state.taskReducer);

  const item = tasks.find((task) => task.id === params);
  const isCompleted = item?.subtasks.filter((sub) => sub.isCompleted === true);

  return (
    <div className=" flex-1 flex">
      {item?.subtasks.length === 0 ? (
        <p className="text-MediumGrey heading-m w-full flex items-center justify-center">
          Henüz bir subtask yok
        </p>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          <h4 className="text-MediumGrey heading-m">
            Subtasks ({isCompleted?.length} of {item?.subtasks.length})
          </h4>

          <div className="flex flex-col gap-4 max-h-[140px] overflow-y-auto pr-5 select-none">
            {item?.subtasks.map((sub) => (
              <SubTaskItem key={sub.id} sub={sub} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubTasks;
