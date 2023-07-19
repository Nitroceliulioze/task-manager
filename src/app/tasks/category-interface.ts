import { TaskInterface } from "./task-interface";

export interface CategoryInterface {
    id?: number;
    categoryTitle: string;
    tasks: TaskInterface[];
}