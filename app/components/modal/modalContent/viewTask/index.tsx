import ThreedotButton from "@/app/components/threedotButton";
import SubTasks from "./subtasks";
import CurrentStatus from "../../currentStatus";

const ViewTask = () => {
  return (
    <div className="w-full max-w-[480px] rounded-md p-8 bg-White dark:bg-DarkGrey flex flex-col gap-6 shadow-custom-light shadow-custom-dark">
      <div className="flex items-center gap-6">
        <h3 className="heading-l text-black dark:text-White">
          Research pricing points of various competitors and trial different
          business models
        </h3>

        <ThreedotButton type="task" />
      </div>

      <p className="body-l text-MediumGrey">
        We know what were planning to build for version one. Now we need to
        finalise the first pricing model well use. Keep iterating the
        subtasksuntil we have a coherent proposition.
      </p>
      <SubTasks />
      <CurrentStatus />
    </div>
  );
};

export default ViewTask;
