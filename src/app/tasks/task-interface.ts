export interface TaskInterface {
  id?: number;
  taskTitle: string;
  taskDate: Date | string;
  taskCategory: string;
  taskCompleted: boolean;
}
