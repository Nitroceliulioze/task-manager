import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from '../task-interface';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: TaskInterface;
  @Output() taskAction= new EventEmitter;

  onClick(): void {
    this.taskAction.emit()
  }
}
