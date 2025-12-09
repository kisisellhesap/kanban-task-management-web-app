"use client";
import { useDispatch, useSelector } from "react-redux";
import ModalContent from "./modalContent";
import { AppDispatch, RootState } from "@/app/redux/store";
import { closeModal } from "@/app/redux/slices/modalSlice";
import { resetForm as boardReset } from "@/app/redux/slices/boardFormSlice";
import { resetForm as taskReset } from "@/app/redux/slices/taskFormSlice";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Modal = () => {
  const { isOpen } = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { id } = useParams();
  if (isOpen) {
    return (
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center"
        onClick={() => {
          dispatch(closeModal());
          dispatch(boardReset());
          dispatch(taskReset());

          router.push(id ? `/boards/${id}` : "/boards");
        }}
      >
        <ModalContent />
      </div>
    );
  }
};

export default Modal;
