export interface Task {
  boardId: string;
  columnId: string;
  id: string;
  name: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}
export interface Board {
  id: string;
  name: string;
  columns: Column[];
}

export interface Column {
  boardId: string;
  id: string;
  name: string;
  tasks: Task[];
  color: string;
}
export interface Subtask {
  name: string;
  id: string;
  isCompleted: boolean;
  color: "";
}
