import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../tasks/task-interface';
import { TasksService } from '../services/tasks.service';
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
    this.taskService.getAllTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  openCreateTask(): void {
    const _createTaskDialogContent = this.dialog.open(CreateTaskComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
    _createTaskDialogContent.afterClosed().subscribe((item) => {
      console.log(item);
    });
  }

  openCategoryList(): void {
    this.router.navigate(['/category']);
  }

  toggleTaskAndCategory(): void {
    this.taskListView = !this.taskListView;
  }

  deleteTask(task: TaskInterface): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  completeTask(task: TaskInterface): void {
    task.taskCompleted = !task.taskCompleted;
    this.taskService.taskCompleted(task).subscribe();
  }
}
