import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskComponent,
    TaskListComponent
  ]
})
export class TasksModule { }
