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
  isCreateTaskOpen = false;
  tasks: TaskInterface[] = [
    { taskTitle: 'Task 1', taskDate: '08/17/2023', taskCategory: 'Meetings' },
    { taskTitle: 'Task 2', taskDate: '03/17/2023', taskCategory: 'Birthdays' },
    { taskTitle: 'Task 3', taskDate: '01/17/2023', taskCategory: 'Meetings' },
  ];
  categoryTitle: string[] = ['Meetings', 'Birthdays', 'Tasks', 'Test']; //reiktu pakeist i taskCategory tikriausiai

  constructor(private router: Router, private dialog: MatDialog) {}

  openCreateTask(): void {
    this.dialog.open(CreateTaskComponent, {
      data: {
        taskTitle: 'Buy a cake',
        taskDate: '',
        taskCategory: 'Birthdays',
      },
    });
    // this.isCreateTaskOpen = true;
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

  openCreateListDialog() {
    this.dialog.open(CreateListComponent, {});
  }
}
