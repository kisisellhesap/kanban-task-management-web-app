import { Board, BoardWithId } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addBoard, deleteBoard, getBoard, saveBoard } from "./actions";

interface InitialStateProps {
  boards: BoardWithId[];
  boardForm: Board;
  loading: boolean;
  error: string | undefined;
}
const initialState: InitialStateProps = {
  boards: [],
  loading: false,
  error: undefined,
  boardForm: {
    name: "",
    columns: [],
  },
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.boardForm.name = action.payload;
    },
    setColumnName: (state, action) => {
      const column = state.boardForm.columns.find(
        (item) => item.id === action.payload.columnId
      );
      if (column) {
        column.name = action.payload.newName;
      }
      console.log(action.payload);
    },
    setColumnColor: (state, action) => {
      const column = state.boardForm.columns.find(
        (item) => item.id === action.payload.columnId
      );
      if (column) {
        column.color = action.payload.columnColor;
      }
      console.log(action.payload);
    },
    addColumn: (state, action) => {
      state.boardForm.columns = [...state.boardForm.columns, action.payload];
    },
    deleteColumn: (state, action) => {
      const filtered = state.boardForm.columns.filter(
        (column) => column.id !== action.payload
      );
      state.boardForm.columns = filtered;
    },
    updateForm: (state, action) => {
      state.boardForm = action.payload;
    },
    resetForm: (state) => {
      state.boardForm = { name: "", columns: [] };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addBoard.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(
        addBoard.fulfilled,
        (state, action: PayloadAction<BoardWithId>) => {
          state.boards.push(action.payload);
          state.loading = false;
          state.error = "";
        }
      )
      .addCase(addBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getBoard.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(
        getBoard.fulfilled,
        (state, action: PayloadAction<BoardWithId[]>) => {
          state.boards = action.payload;
          state.loading = false;
          state.error = "";
        }
      )
      .addCase(getBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(saveBoard.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(
        saveBoard.fulfilled,
        (state, action: PayloadAction<BoardWithId>) => {
          state.boards = state.boards.map((item) =>
            item.id === action.payload.id ? action.payload : item
          );
          state.loading = false;
          state.error = "";
        }
      )
      .addCase(saveBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBoard.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(
        deleteBoard.fulfilled,
        (state, action: PayloadAction<BoardWithId>) => {
          state.boards = state.boards.filter(
            (item) => item.id !== action.payload.id
          );
          state.loading = false;
          state.error = "";
        }
      )
      .addCase(deleteBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default boardSlice.reducer;
export const {
  setName,
  addColumn,
  deleteColumn,
  setColumnName,
  setColumnColor,
  updateForm,
  resetForm,
} = boardSlice.actions;
