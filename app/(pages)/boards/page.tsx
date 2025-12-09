"use client";

import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";

const Boards = () => {
  const { boards } = useSelector((state: RootState) => state.boardReducer);

  return (
    <div className="w-full h-full gap-6 flex items-center justify-center  overflow-x-auto p-4">
      <div>
        {boards.length === 0 ? (
          <p className="heading-l text-MediumGrey">
            If you havent created a board yet, click the left display button and take your first step.
          </p>
        ) : (
          <p className="heading-l text-MediumGrey">Browse boards in the list or create a new one</p>
        )}
      </div>
    </div>
  );
};

export default Boards;
