import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SharedModule } from '../shared/shared.module';
import { CreateListComponent } from './create-list/create-list.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryTaskListComponent } from './category-task-list/category-task-list.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TaskComponent,
    CreateTaskComponent,
    CreateListComponent,
    CategoryCardComponent,
    CategoryTaskListComponent,
  ],
  imports: [CommonModule, SharedModule, MaterialModule, ReactiveFormsModule],
  exports: [
    TaskComponent,
    CreateTaskComponent,
    CreateListComponent,
    CategoryCardComponent,
  ],
})
export class TasksModule {}
