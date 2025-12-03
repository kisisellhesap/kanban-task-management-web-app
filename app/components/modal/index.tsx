"use client";
import { AppDispatch, RootState } from "@/app/redux/store";
import ModalContent from "./modalContent";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/app/redux/slices/clientState-UI/modalSlice";

const Modal = () => {
  const { isOpen } = useSelector((store: RootState) => store.modalReducer);
  const dispatch = useDispatch<AppDispatch>();

  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"
      onClick={() => dispatch(closeModal())}
    >
      <ModalContent />
    </div>
  );
};

export default Modal;
