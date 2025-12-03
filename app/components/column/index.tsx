import React from "react";

const Column = () => {
  return (
    <div className="min-w-70 flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <div className="w-[15px] h-[15px] rounded-full bg-red-900"></div>
        <h3 className="heading-s  text-MediumGrey">TODO (4)</h3>
      </div>

      <div className="flex flex-col gap-5">
        <div className="px-4 py-[23px] rounded-lg flex flex-col gap-2 bg-White dark:bg-DarkGrey group cursor-pointer shadow-sm">
          <p className="heading-m text-black dark:text-White line-clamp-1 group-hover:text-MainPurple">
            Build UI for onboarding flow
          </p>
          <span className="font-bold text-[12px] text-MediumGrey">
            1 of 3 substasks
          </span>
        </div>
      </div>
    </div>
  );
};

export default Column;
