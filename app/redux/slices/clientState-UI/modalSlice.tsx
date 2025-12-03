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
    // Eşzamanlı (sync) reducer'lar buraya gelir
  },

  //   extraReducers: (builder) => {
  //     builder
  //       // PENDING: Yükleniyor durumu
  //       .addCase(fetchGorevler.pending, (state) => {
  //         state.status = "loading";
  //         state.error = null;
  //       })
  //       // FULFILLED: Başarılı durumu (action.payload Gorev[] tipindedir)
  //       .addCase(
  //         fetchGorevler.fulfilled,
  //         (state, action: PayloadAction<Gorev[]>) => {
  //           state.status = "succeeded";
  //           state.gorevler = action.payload; // Tip güvenli bir şekilde atanır
  //         }
  //       )
  //       // REJECTED: Hata durumu (action.payload string tipindedir)
  //       .addCase(fetchGorevler.rejected, (state, action) => {
  //         state.status = "failed";
  //         state.error =
  //           action.payload || action.error.message || "Bilinmeyen Hata";
  //       });
  //   },
});

export default modalSlice.reducer;
export const { openModal, closeModal, toggleModal, changeModalContent } =
  modalSlice.actions;
