"use client";
import { AppDispatch, RootState } from "@/app/redux/store";
import ModalContent from "./modalContent";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/app/redux/slices/clientState-UI/modalSlice";
import { useParams, useRouter } from "next/navigation";
import { resetForm } from "@/app/redux/slices/serverState-FETCH/board/boardSlice";

const Modal = () => {
  const { isOpen } = useSelector((store: RootState) => store.modalReducer);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { id } = useParams();
  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center"
      onClick={() => {
        dispatch(closeModal());
        dispatch(resetForm());
        router.push(id ? `/boards/${id}` : "/boards");
      }}
    >
      <ModalContent />
    </div>
  );
};

export default Modal;
