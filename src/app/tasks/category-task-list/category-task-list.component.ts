import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateListComponent } from '../create-list/create-list.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryInterface } from '../category-interface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-category-task-list',
  templateUrl: './category-task-list.component.html',
  styleUrls: ['./category-task-list.component.css'],
})
export class CategoryTaskListComponent {
  @Input() categoryTitle!: string;
  @Output() editCategoryName = new EventEmitter();
  @Output() deleteCategory = new EventEmitter();

  // onEdit(): void {
  //   this.dialog.open(CreateListComponent, {
  //     enterAnimationDuration: '500ms',
  //     exitAnimationDuration: '500ms',
  //   });
  // }

  onEdit() {
    this.editCategoryName.emit();
  }
  // onDelete(category: CategoryInterface): void {
  //   this.categoryService
  //     .deleteCategory(category)
  //     .subscribe(
  //       () =>
  //         (this.categories = this.categories.filter(
  //           (c) => c.id !== this.category.id
  //         ))
  //     );
  // }
  onDelete() {
    this.deleteCategory.emit();
  }

  // deleteTask(task: TaskInterface): void {
  //   this.taskService
  //     .deleteTask(task)
  //     .subscribe(
  //       () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
  //     );
  // }

  // completeTask(task: TaskInterface): void {
  //   task.taskCompleted = !task.taskCompleted;
  //   this.taskService.taskCompleted(task).subscribe();
  // }

  // editTask() {
  //   const _createTaskDialogContent = this.dialog.open(CreateTaskComponent, {
  //     enterAnimationDuration: '500ms',
  //     exitAnimationDuration: '500ms',
  //   });
  //   _createTaskDialogContent.afterClosed().subscribe((task) => {
  //     console.log(task);
  //   });
  // }
}
