import { Component } from '@angular/core';
import { TaskInterface } from '../tasks/task-interface';
import { CategoryInterface } from '../tasks/category-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isCreateTaskOpen: boolean = false;
  tasks: TaskInterface[] = [
    { taskTitle: 'Task 1', taskDate: '08/17/2023' },
    { taskTitle: 'Task 2', taskDate: '03/17/2023' },
    { taskTitle: 'Task 3', taskDate: '01/17/2023' },
  ];
  categoryCardInfo: CategoryInterface[] = [
    { categoryTitle: 'Title 1', listItemsCount: 1 },
  ];
  openCreateTask(): void {
    this.isCreateTaskOpen = true;
  }

  openTaskList(): void {
    console.log('Open Tasks list');
  }

  openCategoryList(): void {
    console.log('open list tasks');
  }
}
