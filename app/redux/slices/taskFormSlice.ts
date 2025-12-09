import { Task } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  form: Task;
}

const initialState: InitialStateProps = {
  form: {
    boardId: "",
    columnId: "",
    id: "",
    name: "",
    description: "",
    status: "",
    subtasks: [],
  },
};

export const formSlice = createSlice({
  name: "formTask",
  initialState,
  reducers: {
    setBoardIdForTask: (state, action) => {
      state.form.boardId = action.payload;
    },
    setTaskId: (state, action) => {
      state.form.id = action.payload;
    },
    setName: (state, action) => {
      state.form.name = action.payload;
    },
    setDescription: (state, action) => {
      state.form.description = action.payload;
    },
    setSubTaskName: (state, action) => {
      const column = state.form.subtasks.find((item) => item.id === action.payload.id);
      if (column) {
        column.name = action.payload.name;
      }
      console.log(action.payload);
    },
    setColumnId: (state, action) => {
      state.form.columnId = action.payload;
    },
    addSubTask: (state, action) => {
      state.form.subtasks = [...state.form.subtasks, action.payload];
    },
    deleteSubTask: (state, action) => {
      const filtered = state.form.subtasks.filter((column) => column.id !== action.payload);
      state.form.subtasks = filtered;
    },

    updateForm: (state, action) => {
      state.form = action.payload;
    },
    resetForm: (state) => {
      state.form = {
        boardId: "",
        columnId: "",
        id: "",
        name: "",
        description: "",
        status: "",
        subtasks: [],
      };
    },

    setStatusTask: (state, action) => {
      state.form.status = action.payload;
    },
  },
});

export default formSlice.reducer;
export const {
  setBoardIdForTask,
  setColumnId,
  setTaskId,
  setName,
  setDescription,
  addSubTask,
  deleteSubTask,
  setSubTaskName,
  updateForm,
  resetForm,
  setStatusTask,
} = formSlice.actions;
