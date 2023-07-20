import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../tasks/task-interface';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../tasks/create-task/create-task.component';
import { CategoryInterface } from '../tasks/category-interface';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  taskListView!: boolean;
  filter = '';
  categories: CategoryInterface[] = [];
  isCategoryOpen = false;
  category!: CategoryInterface;
  selectedCategoryTasks: TaskInterface[] = [];
  selectedCategoryId: number | null = null;
  selectedCategory: CategoryInterface | null = null;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private taskService: TasksService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });
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

  openCategoryList(category: CategoryInterface): void {
    // this.filter = this.category.categoryTitle;
    if (category.id !== undefined) {
      this.isCategoryOpen = true;
      this.selectedCategory = category;
      this.getTasksForSelectedCategory(category.id);
    }
  }

  getTasksForSelectedCategory(categoryId: number): void {
    this.categoryService.getTasksForCategory(categoryId).subscribe((tasks) => {
      if (this.selectedCategory) this.selectedCategory.tasks = tasks;
    });
  }

  getCurrentCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  isCategorySelected(categoryId: number | undefined): boolean {
    return (
      this.selectedCategoryId !== null && this.selectedCategoryId === categoryId
    );
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

  deleteTask(): void {
    // this.categoryService
    //   .deleteTask(task)
    //   .subscribe(
    //     () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    //   );
    console.log('task is deleted');
  }

  completeTask(): void {
    // this.category.tasks.taskCompleted = !task.tasks.taskCompleted;
    // this.taskService.taskCompleted(task).subscribe();
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
