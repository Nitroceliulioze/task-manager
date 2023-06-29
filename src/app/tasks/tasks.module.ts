import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SharedModule } from '../shared/shared.module';
import { CreateListComponent } from './create-list/create-list.component';
import { CategoryCardComponent } from './category-card/category-card.component';



@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    CreateTaskComponent,
    CreateListComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TaskComponent,
    TaskListComponent,
    CreateTaskComponent,
    CreateListComponent,
    CategoryCardComponent
  ]
})
export class TasksModule { }
