import { Component } from '@angular/core';
import { TaskInterface } from '../tasks/task-interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateListComponent } from '../tasks/create-list/create-list.component';
import { CreateTaskComponent } from '../tasks/create-task/create-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  taskListView!: boolean;
  tasks: TaskInterface[] = [
    {
      taskId: 1,
      taskTitle: 'Task 1',
      taskDate: '08/17/2023',
      taskCategory: 'Meetings',
    },
    {
      taskId: 2,
      taskTitle: 'Task 2',
      taskDate: '03/17/2023',
      taskCategory: 'Birthdays',
    },
    {
      taskId: 3,
      taskTitle: 'Task 3',
      taskDate: '01/17/2023',
      taskCategory: 'Test',
    },
  ];

  constructor(private router: Router, private dialog: MatDialog) {}

  openCreateTask(): void {
    this.dialog.open(CreateTaskComponent, {
      data: {
        taskId: 4,
        taskTitle: 'Buy a cake',
        taskDate: '',
        taskCategory: 'Birthdays',
      },
    });
  }

  openCategoryList(): void {
    this.router.navigate(['/categories']);
  }

  openCreateListDialog() {
    this.dialog.open(CreateListComponent, {});
  }

  toggleTaskAndCategory(): void {
    this.taskListView = !this.taskListView;
  }

  onTaskAcion(): void {
    console.log('Task Action clicked');
  }
}
