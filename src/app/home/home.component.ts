import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../tasks/task-interface';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../tasks/create-task/create-task.component';
import { CategoryInterface } from '../tasks/category-interface';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  taskListView!: boolean;
  filter = '';
  tasks: TaskInterface[] = [];
  categories: CategoryInterface[] = [];
  category!: CategoryInterface;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private taskService: TasksService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((tasks) => (this.tasks = tasks));
    console.log(this.tasks);
    this.categoryService
      .getAllCategories()
      .subscribe((categories) => (this.categories = categories));
    console.log(this.categories);
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
    // this.filter = this.category.categoryTitle;
    this.router.navigate(['/category']);
  }

  // getFilteredCategories() {
  //   return this.filter === ''
  //     ? this.categories
  //     : this.categories.filter(
  //         (category) => category.categoryTitle === this.filter
  //       );
  // }
  //cia turetu but observable rpie kurios prisisubscribintu category-tasks-list ir tada tik is to rencerintu vaizda

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

  editTask() {
    const _createTaskDialogContent = this.dialog.open(CreateTaskComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
    _createTaskDialogContent.afterClosed().subscribe((task) => {
      console.log(task);
    });
  }
}
