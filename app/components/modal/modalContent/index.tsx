import { chooseContentForModal } from "@/app/constant/modalContentType";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import TaskForm from "./taskForm";
import BoardForm from "./boardForm";
import AreYouSure from "./areYouSure";
import ViewTask from "./viewTask";

const ModalContent = () => {
  const { modalContent } = useSelector(
    (state: RootState) => state.modalReducer
  );

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="mx-8 max-md:mx-3 max-w-[480px] w-full"
    >
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
