import { chooseContentForModal } from "@/app/constant/modalContentType";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import TaskForm from "./taskForm";
import BoardForm from "./boardForm";
import AreYouSure from "./areYouSure";

const ModalContent = () => {
  const { modalContent } = useSelector(
    (state: RootState) => state.modalReducer
  );

  switch (modalContent) {
    case chooseContentForModal.add_task:
      return <TaskForm />;
    case chooseContentForModal.add_board:
      return <BoardForm />;
    case chooseContentForModal.delete_board:
      return <AreYouSure />;
    case chooseContentForModal.delete_task:
      return <AreYouSure />;
    case chooseContentForModal.edit_board:
      return <BoardForm />;
    case chooseContentForModal.edit_task:
      return <TaskForm />;
    default:
      return <div>Ignore</div>;
  }
};

export default ModalContent;
