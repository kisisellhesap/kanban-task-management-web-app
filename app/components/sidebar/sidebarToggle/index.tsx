"use client";
import { toggleSideBar } from "@/app/redux/slices/clientState-UI/sidebarSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import {
  sidebarToggleSpanVariant,
  sidebarToggleVariant,
} from "@/app/constant/framerVariants/SidebarVariants";
import { useTheme } from "next-themes";
const SidebarToggle = () => {
  const { isClose } = useSelector((store: RootState) => store.sidebarReducer);
  const { theme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  console.log(isClose);
  return (
    <motion.button
      variants={sidebarToggleVariant}
      initial={"short"}
      animate={isClose ? "short" : "long"}
      whileHover={
        isClose ? "shortHover" : theme === "dark" ? "darkHover" : "longHover"
      }
      className="max-w-[276px] flex items-center gap-4 py-4 rounded-r-full fixed left-0 bottom-12"
      onClick={() => dispatch(toggleSideBar())}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isClose ? "closed" : "open"}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
        >
          {isClose ? (
            <FaRegEye className="w-5 h-5" />
          ) : (
            <FaRegEyeSlash className="w-5 h-5" />
          )}
        </motion.div>
      </AnimatePresence>

      <motion.span
        variants={sidebarToggleSpanVariant}
        initial={"visible"}
        animate={isClose ? "hidden" : "visible"}
        className="heading-m whitespace-nowrap"
      >
        Hide Sidebar
      </motion.span>
    </motion.button>
  );
};

export default SidebarToggle;
