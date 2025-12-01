import { createSlice } from "@reduxjs/toolkit";

const initialState: { isClose: boolean } = {
  isClose: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isClose = !state.isClose;
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

export default sidebarSlice.reducer;
export const { toggleSideBar } = sidebarSlice.actions;
