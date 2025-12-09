import ThreedotButton from "@/app/components/threedotButton";
import SubTasks from "./subtasks";
import CurrentStatus from "../../currentStatus";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const ViewTask = () => {
  const params = useSearchParams().get("taskId");

  const { tasks } = useSelector((state: RootState) => state.taskReducer);

  const item = tasks.find((task) => task.id === params);
  console.log(item);

  return (
    <div className="rounded-md p-8 bg-White dark:bg-DarkGrey flex flex-col gap-6 shadow-custom-light shadow-custom-dark min-h-[400px]">
      <div className="flex items-center justify-between gap-6">
        <h3 className="heading-l text-black dark:text-White">{item?.name}</h3>

        <ThreedotButton type="task" />
      </div>

      <p className="body-l text-MediumGrey">{item?.description}</p>

      <SubTasks />

      <CurrentStatus status={item?.status} />
    </div>
  );
};

export default ViewTask;
