import { Board } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  boards: Board[];
  loading: boolean;
  error: string | undefined;
}
const initialState: InitialStateProps = {
  boards: [],
  loading: false,
  error: undefined,
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
