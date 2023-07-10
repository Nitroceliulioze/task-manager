import { Component } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  isCreateTaskOpen = false;
  tasks: TaskInterface[] = [
    { taskTitle: 'Task 1', taskDate: '08/17/2023', taskCategory: 'Meetings' },
    { taskTitle: 'Task 2', taskDate: '03/17/2023', taskCategory: 'Birthdays' },
    { taskTitle: 'Task 3', taskDate: '01/17/2023', taskCategory: 'Meetings' },
  ];

  constructor(private router: Router) {}

  onTaskAcion(): void {
    console.log('Task Action clicked');
  }
  openCreateTask(): void {
    this.isCreateTaskOpen = true;
  }

  openTaskList(): void {
    this.router.navigate(['/home']);
  }

  closeDialog(): void {
    this.isCreateTaskOpen = false;
  }

  onCloseDialog(): void {
    this.isCreateTaskOpen = false;
  }
}
