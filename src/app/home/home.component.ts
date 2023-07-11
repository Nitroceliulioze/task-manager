import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../tasks/task-interface';
import { TasksService } from '../shared/services/tasks.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../tasks/create-task/create-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  taskListView!: boolean;
  tasks: TaskInterface[] = [];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private taskService: TasksService
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  openCreateTask(): void {
    const _createTaskDialogContent = this.dialog.open(CreateTaskComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: {
        taskId: 4,
        taskTitle: 'Buy a cake',
        taskDate: '',
        taskCategory: 'Birthdays',
      },
    });
    _createTaskDialogContent.afterClosed().subscribe((item) => {
      console.log(item);
    });
  }

  openCategoryList(): void {
    this.router.navigate(['/categories']);
  }

  toggleTaskAndCategory(): void {
    this.taskListView = !this.taskListView;
  }

  onTaskAcion(): void {
    console.log('Task Action clicked');
  }
}
