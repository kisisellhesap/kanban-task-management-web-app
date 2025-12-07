"use client";
import { TbLayoutBoardSplit } from "react-icons/tb";
import ThemeToggle from "./themeToggle";
import Boards from "./boards";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { motion } from "framer-motion";
import {
  sidebarChildVariant,
  sidebarVariant,
} from "@/app/constant/framerVariants/SidebarVariants";
import {
  changeModalContent,
  openModal,
} from "@/app/redux/slices/clientState-UI/modalSlice";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const { isClose } = useSelector((store: RootState) => store.sidebarReducer);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  return (
    <motion.aside
      variants={sidebarVariant}
      initial={"closed"}
      animate={isClose ? "closed" : "open"}
      className={`bg-White w-75 h-[calc(100vh-83.83px)]  dark:bg-DarkGrey border-r  py-8 flex flex-col max-lg:fixed max-lg:left-0 ${
        isClose ? "border-transparent" : "border-Lines dark:border-LinesDark"
      }`}
    >
      <motion.div
        variants={sidebarChildVariant}
        initial={"hidden"}
        animate={isClose ? "hidden" : "visible"}
        className="flex flex-col h-screen "
      >
        <Boards />
        <button
          className=" max-w-[276px] flex items-center gap-4 px-8 py-4 rounded-r-full text-MainPurple"
          onClick={() => {
            dispatch(openModal());
            dispatch(changeModalContent("add_board"));
            router.push("/boards");
          }}
        >
          <TbLayoutBoardSplit className="w-6 h-6" />
          <span className=" heading-m ">+ Create New Board</span>
        </button>

        <ThemeToggle />
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
