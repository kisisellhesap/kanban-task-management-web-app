import { Task } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  tasks: Task[];
  loading: boolean;
  error: string | undefined;
}
const initialState: InitialStateProps = {
  tasks: [],
  loading: false,
  error: undefined,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export default taskSlice.reducer;
export const { addTask } = taskSlice.actions;
