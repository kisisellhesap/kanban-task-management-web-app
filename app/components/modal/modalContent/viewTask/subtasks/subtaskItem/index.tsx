import React from "react";
import { FaCheck } from "react-icons/fa";

const SubTaskItem = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div
      className="rounded-sm bg-LightGreyBG dark:bg-VeryDarkGrey flex items-center gap-4 p-[13px] hover:bg-HoverMainPurple/25 dark:hover:bg-MainPurple/25 cursor-pointer"
      onClick={toggleCheckbox}
    >
      <div
        className={`min-w-4 min-h-4 rounded-xs  border border-Border/25  ${
          isChecked
            ? "flex items-center justify-center bg-MainPurple"
            : "bg-White dark:bg-DarkGrey"
        }`}
      >
        {isChecked && <FaCheck className="text-White w-2 " />}
      </div>
      <p
        className={` font-bold text-[12px] ${
          isChecked
            ? "line-through text-MediumGrey"
            : "text-black dark:text-white"
        }`}
      >
        Talk to potential customers about our proposed solution and ask for fair
        price expectancy
      </p>
    </div>
  );
};

export default SubTaskItem;
