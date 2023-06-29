import { Component } from '@angular/core';
import { TaskInterface } from '../tasks/task-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tasks: TaskInterface[] = [
    { taskTitle: 'Task 1', taskDate: '08/17/2023' },
    { taskTitle: 'Task 2', taskDate: '03/17/2023' },
    { taskTitle: 'Task 3', taskDate: '01/17/2023' },
  ];
  openCreateTask(): void {
    console.log('Open create task');
  }

  openTaskList(): void {
    console.log('Open Tasks list');
  }
}
