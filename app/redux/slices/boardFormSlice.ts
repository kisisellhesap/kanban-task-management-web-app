import { Board } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  form: Board;
}

const initialState: InitialStateProps = {
  form: {
    id: "",
    name: "",
    columns: [],
  },
};

export const formSlice = createSlice({
  name: "formBoard",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.form.name = action.payload;
    },
    setBoardId: (state, action) => {
      state.form.id = action.payload;
    },
    setColumnName: (state, action) => {
      const column = state.form.columns.find((item) => item.id === action.payload.id);
      if (column) {
        column.name = action.payload.name;
      }
      console.log(action.payload);
    },
    setColumnBoardId: (state, action) => {
      const column = state.form.columns.find((item) => item.id === action.payload.columnId);
      if (column) {
        column.boardId = action.payload.id;
      }
      console.log(action.payload);
    },
    setColumnColor: (state, action) => {
      const column = state.form.columns.find((item) => item.id === action.payload.id);
      if (column) {
        column.color = action.payload.color;
      }
      console.log(action.payload);
    },
    addColumn: (state, action) => {
      state.form.columns = [...state.form.columns, action.payload];
    },
    deleteColumn: (state, action) => {
      const filtered = state.form.columns.filter((column) => column.id !== action.payload);
      state.form.columns = filtered;
    },
    updateForm: (state, action) => {
      state.form = action.payload;
    },
    resetForm: (state) => {
      state.form = { id: "", name: "", columns: [] };
    },
  },
});

export default formSlice.reducer;
export const {
  setBoardId,
  setName,
  addColumn,
  deleteColumn,
  setColumnName,
  setColumnColor,
  updateForm,
  resetForm,
  setColumnBoardId,
} = formSlice.actions;
