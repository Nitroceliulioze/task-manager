import { Component } from '@angular/core';
import { TaskInterface } from '../tasks/task-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isCreateTaskOpen = false;
  tasks: TaskInterface[] = [
    { taskTitle: 'Task 1', taskDate: '08/17/2023' },
    { taskTitle: 'Task 2', taskDate: '03/17/2023' },
    { taskTitle: 'Task 3', taskDate: '01/17/2023' },
  ];
  categoryTitle: string[] = ['Meetings', 'Birthdays', 'Tasks', 'Test'];

  constructor(private router: Router) {}

  openCreateTask(): void {
    this.isCreateTaskOpen = true;
  }

  closeDialog(): void {
    this.isCreateTaskOpen = false;
  }

  onCloseDialog(): void {
    this.isCreateTaskOpen = false;
  }

  openTaskList(): void {
    this.router.navigate(['/tasks']);
    console.log('open task');
  }

  openCategoryList(): void {
    this.router.navigate(['/categories']);
  }
}
