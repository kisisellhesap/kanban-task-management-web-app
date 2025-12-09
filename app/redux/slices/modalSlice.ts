import { chooseContentForModal } from "@/app/constant/modalContentType";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  isOpen: boolean;
  modalContent: keyof typeof chooseContentForModal | null;
}
const initialState: InitialStateProps = {
  isOpen: false,
  modalContent: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    changeModalContent: (
      state,
      action: {
        payload: keyof typeof chooseContentForModal;
      }
    ) => {
      state.modalContent = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal, toggleModal, changeModalContent } =
  modalSlice.actions;
