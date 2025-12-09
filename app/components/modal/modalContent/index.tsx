import { chooseContentForModal } from "@/app/constant/modalContentType";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./taskForm";
import BoardForm from "./boardForm";
import AreYouSure from "./areYouSure";
import ViewTask from "./viewTask";
import { FaXmark } from "react-icons/fa6";
import { closeModal } from "@/app/redux/slices/modalSlice";

const ModalContent = () => {
  const { modalContent } = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="mx-8 max-md:mx-3 max-w-[480px] max-h-[460px] overflow-y-auto w-full relative"
    >
      <button
        className="absolute right-5 top-5"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        <FaXmark className="w-5 h-5" />
      </button>
      {(() => {
        switch (modalContent) {
          case chooseContentForModal.add_task:
            return <TaskForm />;
          case chooseContentForModal.add_board:
            return <BoardForm />;
          case chooseContentForModal.delete_board:
            return <AreYouSure type="board" />;
          case chooseContentForModal.delete_task:
            return <AreYouSure type="task" />;
          case chooseContentForModal.edit_board:
            return <BoardForm />;
          case chooseContentForModal.edit_task:
            return <TaskForm />;
          case chooseContentForModal.view_task:
            return <ViewTask />;
          default:
            return <div>Ignore</div>;
        }
      })()}
    </div>
  );
};

export default ModalContent;
