"use client";
import {
  changeModalContent,
  openModal,
} from "@/app/redux/slices/clientState-UI/modalSlice";
import { AppDispatch } from "@/app/redux/store";
import { useDispatch } from "react-redux";

const NewColumnAdd = () => {
  const dispatch = useDispatch<AppDispatch>();
  const addColumn = () => {
    dispatch(openModal());
    dispatch(changeModalContent("edit_board"));
  };

  return (
    <button
      onClick={addColumn}
      className="min-w-70 h-full flex items-center justify-center heading-xl text-MediumGrey bg-[#e9effa]/80 dark:bg-[#AFB6B9]/2 hover:text-MainPurple rounded-md"
    >
      + New Column
    </button>
  );
};

export default NewColumnAdd;
