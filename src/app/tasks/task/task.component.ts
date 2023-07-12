import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: TaskInterface;
  @Output() deleteTask = new EventEmitter();

  constructor(private router: Router, private taskService: TasksService) {}

  onEdit(): void {
    // this.router.navigate(['/tasks/edit']);
  }
  onDeleteTask(): void {
    this.deleteTask.emit();
  }
  onComplete(): void {
    console.log('complete task');
  }
}
