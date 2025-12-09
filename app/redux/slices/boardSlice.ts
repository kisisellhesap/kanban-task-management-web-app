import { Board } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  boards: Board[];
}
const initialState: InitialStateProps = {
  boards: [],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      state.boards = [...state.boards, action.payload];
    },
    deleteBoard: (state, action) => {
      state.boards = state.boards.filter((board) => board.id !== action.payload);
    },
    editBoard: (state, action) => {
      state.boards = state.boards.map((board) => (board.id === action.payload.id ? action.payload : board));
    },
  },
});

export default boardSlice.reducer;
export const { addBoard, deleteBoard, editBoard } = boardSlice.actions;
