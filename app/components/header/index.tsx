"use client";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./logo";
import { AppDispatch, RootState } from "@/app/redux/store";
import Button from "../button";
import { useMiniScreen } from "@/app/hooks/useBreakPointScreen";
import { FaPlus } from "react-icons/fa6";
import ThreedotButton from "../threedotButton";
import { changeModalContent, openModal } from "@/app/redux/slices/modalSlice";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { setBoardIdForTask, setTaskId } from "@/app/redux/slices/taskFormSlice";

const Header = () => {
  const { isClose } = useSelector((store: RootState) => store.sidebarReducer);

  const { boards } = useSelector((store: RootState) => store.boardReducer);
  const { form } = useSelector((store: RootState) => store.taskFormReducer);

  const { id } = useParams();

  const board = boards.find((item) => item.id === id);

  const dispatch = useDispatch<AppDispatch>();
  const isMiniScreen = useMiniScreen();

  const addNewTask = () => {
    if (board) {
      dispatch(openModal());
      dispatch(changeModalContent("add_task"));
      dispatch(setTaskId(crypto.randomUUID()));
      dispatch(setBoardIdForTask(id));

      console.log("Add New Task clicked");
    } else {
      toast.info("Select the board, or create it if you don't have one.");
    }
  };

  return (
    <header
      className={`flex w-full bg-White dark:bg-DarkGrey h-[83.83px]   ${
        isMiniScreen
          ? "border-b border-Lines dark:border-LinesDark"
          : isClose && "border-b border-Lines dark:border-LinesDark"
      }`}
    >
      <div className="max-w-[268px] min-w-6 w-full max-md:w-6 flex items-center border-r border-Lines dark:border-LinesDark max-md:border-0 ml-8 max-md:ml-3">
        <Logo />
      </div>

      <div
        className={`w-full flex items-center justify-between gap-5 max-md:gap-2 max-md:px-3 border-b px-8   ${
          isMiniScreen
            ? "border-transparent"
            : !isClose
            ? "border-Lines dark:border-LinesDark"
            : "border-transparent"
        } `}
      >
        <h1 className="heading-xl text-black dark:text-White whitespace-nowrap">{board?.name}</h1>
        <div className=" flex items-center justify-end gap-5 max-md:gap-2 w-full">
          <Button
            type="primary"
            size="L"
            text="+ Add New Task"
            width="164px"
            icon={<FaPlus className="w-3 h-3 hidden max-md:block" />}
            onClick={addNewTask}
          />

          <ThreedotButton type="board" />
        </div>
      </div>
    </header>
  );
};

export default Header;
