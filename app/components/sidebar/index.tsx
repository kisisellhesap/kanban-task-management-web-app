"use client";
import { TbLayoutBoardSplit } from "react-icons/tb";
import ThemeToggle from "./themeToggle";
import Logo from "./logo";
import Boards from "./boards";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { motion } from "framer-motion";
import {
  sidebarChildVariant,
  sidebarVariant,
} from "@/app/constant/framerVariants/SidebarVariants";
const Sidebar = () => {
  const { isClose } = useSelector((store: RootState) => store.sidebarReducer);

  return (
    <motion.aside
      variants={sidebarVariant}
      initial={"closed"}
      animate={isClose ? "closed" : "open"}
      className="bg-White w-75   dark:bg-DarkGrey border-r border-Lines dark:border-LinesDark py-8 flex flex-col max-lg:fixed max-lg:left-0 max-lg:h-full "
    >
      <motion.div
        variants={sidebarChildVariant}
        initial={"hidden"}
        animate={isClose ? "hidden" : "visible"}
        className="flex flex-col h-full"
      >
        <Logo />

        <Boards />
        <button className=" max-w-[276px] flex items-center gap-4 px-8 py-4 rounded-r-full text-MainPurple">
          <TbLayoutBoardSplit className="w-6 h-6" />
          <span className=" heading-m ">+ Create New Board</span>
        </button>

        <ThemeToggle />
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
