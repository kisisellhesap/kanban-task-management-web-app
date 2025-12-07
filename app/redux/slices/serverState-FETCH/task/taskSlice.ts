import { Task } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  tasks: Task[];
  taskForm: Task;
}
const initialState: InitialStateProps = {
  tasks: [],
  taskForm: {
    name: "",
    description: "",
    subtasks: [],
    status: "",
  },
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.taskForm.name = action.payload;
    },
    setDescription: (state, action) => {
      state.taskForm.description = action.payload;
    },
    setsubtaskName: (state, action) => {
      const subtasks = state.taskForm.subtasks.find(
        (item) => item.id === action.payload.subtaskId
      );
      if (subtasks) {
        subtasks.name = action.payload.newName;
      }
      console.log(action.payload);
    },
    addSubtask: (state, action) => {
      state.taskForm.subtasks = [...state.taskForm.subtasks, action.payload];
    },
    deleteSubtask: (state, action) => {
      const filtered = state.taskForm.subtasks.filter(
        (subtask) => subtask.id !== action.payload
      );
      state.taskForm.subtasks = filtered;
    },
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

export default taskSlice.reducer;
export const {
  setName,
  setDescription,
  addSubtask,
  deleteSubtask,
  setsubtaskName,
} = taskSlice.actions;
