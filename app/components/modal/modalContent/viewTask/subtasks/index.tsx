import SubTaskItem from "./subtaskItem";

const SubTasks = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-MediumGrey heading-m">Subtasks (2 of 3)</h4>

      <div className="flex flex-col gap-4 max-h-[140px] overflow-y-auto pr-5">
        <SubTaskItem />
        <SubTaskItem />
        <SubTaskItem />
        <SubTaskItem />
        <SubTaskItem />
        <SubTaskItem />
        <SubTaskItem />
        <SubTaskItem />
        <SubTaskItem />
      </div>
    </div>
  );
};

export default SubTasks;
