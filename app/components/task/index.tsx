const Task = () => {
  return (
    <div className="px-4 py-[23px] rounded-lg flex flex-col gap-2 bg-White dark:bg-DarkGrey group cursor-pointer shadow-sm">
      <p className="heading-m text-black dark:text-White line-clamp-1 group-hover:text-MainPurple">
        Build UI for onboarding flow
      </p>
      <span className="font-bold text-[12px] text-MediumGrey">
        1 of 3 substasks
      </span>
    </div>
  );
};

export default Task;
