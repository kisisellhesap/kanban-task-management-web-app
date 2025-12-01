import Link from "next/link";
import React from "react";
import { TbLayoutBoardSplit } from "react-icons/tb";

const BoardItem = () => {
  return (
    <Link
      href={""}
      className=" max-w-[276px] flex items-center gap-4 px-8 py-4 rounded-r-full text-MediumGrey hover:bg-MainPurple/10  hover:text-MainPurple active:bg-MainPurple active:text-white  dark:hover:bg-White dark:active:bg-MainPurple dark:active:text-white"
    >
      <TbLayoutBoardSplit className="w-6 h-6" />
      <span className=" heading-m ">Platform Launch</span>
    </Link>
  );
};

export default BoardItem;
