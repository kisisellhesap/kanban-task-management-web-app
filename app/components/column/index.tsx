import React from "react";
import Task from "../task";

const Column = () => {
  return (
    <div className="min-w-70 flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <div className="w-[15px] h-[15px] rounded-full bg-red-300"></div>
        <h3 className="heading-s  text-MediumGrey">TODO (4)</h3>
      </div>

      <div className="flex flex-col gap-5">
        <Task />
      </div>
    </div>
  );
};

export default Column;
