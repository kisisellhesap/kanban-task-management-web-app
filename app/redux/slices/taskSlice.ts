import { Task } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  tasks: Task[];
}
const initialState: InitialStateProps = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task));
    },
    setSubTaskCompleted: (state, action) => {
      const { taskId, id: subtaskId } = action.payload;

      const targetTask = state.tasks.find((task) => {
        return task.id === taskId;
      });

      if (targetTask) {
        targetTask.subtasks = targetTask.subtasks.map((sub) => {
          if (sub.id === subtaskId) {
            return {
              ...sub,
              isCompleted: !sub.isCompleted,
            };
          }
          return sub;
        });
      }
    },
  },
});

export default taskSlice.reducer;
export const { addTask, setSubTaskCompleted, editTask, deleteTask } = taskSlice.actions;
