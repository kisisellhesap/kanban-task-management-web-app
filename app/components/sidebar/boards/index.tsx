import Link from "next/link";
import BoardItem from "./boardItem";
import { TbLayoutBoardSplit } from "react-icons/tb";

const Boards = () => {
  return (
    <div className="space-y-[19px]">
      <h3 className="px-[34px] heading-s text-MediumGrey ">ALL BOARDS (3)</h3>

      <div className="flex flex-col gap-1">
        <BoardItem />

        <Link
          href={"/boards/deneme"}
          className=" max-w-[276px] flex items-center gap-4 px-8 py-4 rounded-r-full text-MediumGrey hover:bg-MainPurple/10  hover:text-MainPurple active:bg-MainPurple active:text-white  dark:hover:bg-White dark:active:bg-MainPurple dark:active:text-white"
        >
          <TbLayoutBoardSplit className="w-6 h-6" />
          <span className=" heading-m ">deneme</span>
        </Link>
      </div>
    </div>
  );
};

export default Boards;
