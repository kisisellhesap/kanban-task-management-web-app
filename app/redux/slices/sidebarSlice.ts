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
  },
});

export default sidebarSlice.reducer;
export const { toggleSideBar } = sidebarSlice.actions;
