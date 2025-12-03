import { createSlice } from "@reduxjs/toolkit";

const chooseContentForModal = {
  view_task: "view_task",
  add_task: "add_task",
  edit_task: "edit_task",
  add_board: "add_board",
  edit_board: "edit_board",
};
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
