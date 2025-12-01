"use client";
import { useSelector } from "react-redux";
import Logo from "./logo";
import { RootState } from "@/app/redux/store";
import Button from "../button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useMiniScreen } from "@/app/hooks/useBreakPointScreen";

const Header = () => {
  const { isClose } = useSelector((store: RootState) => store.sidebarReducer);
  const isMiniScreen = useMiniScreen();
  return (
    <header
      className={`flex w-full bg-White dark:bg-DarkGrey h-[83.83px]   ${
        isMiniScreen
          ? "border-b border-Lines dark:border-LinesDark"
          : isClose && "border-b border-Lines dark:border-LinesDark"
      }`}
    >
      <div className="max-w-[268px] min-w-6 w-full max-md:w-6 flex items-center border-r border-Lines dark:border-LinesDark max-md:border-0 ml-8">
        <Logo />
      </div>

      <div
        className={`w-full flex items-center justify-between gap-5 border-b px-8   ${
          isMiniScreen
            ? "border-transparent"
            : !isClose
            ? "border-Lines dark:border-LinesDark"
            : "border-transparent"
        } `}
      >
        <h1 className="heading-xl text-black dark:text-White whitespace-nowrap">
          Platform Launch
        </h1>
        <div className=" flex items-center justify-end gap-5 w-full">
          <Button type="primary" size="L" text="+ Add New Task" width="164px" />
          <button>
            <BsThreeDotsVertical className="text-MediumGrey w-8 h-16" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
