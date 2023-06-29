import { Component } from '@angular/core';
import { TaskInterface } from '../task-interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: TaskInterface[] = [
    { taskTitle: 'Task 1', taskDate: '08/17/2023' },
    { taskTitle: 'Task 2', taskDate: '03/17/2023' },
    { taskTitle: 'Task 3', taskDate: '01/17/2023' },
  ];

  onTaskAcion():void {
    console.log('Task Action clicked')
  }
}
