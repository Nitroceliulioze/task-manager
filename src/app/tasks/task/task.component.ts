import { Component, Input } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: TaskInterface;

  constructor(private router: Router) {}

  onEdit(): void {
    // this.router.navigate(['/tasks/edit']);
  }
  onDelete(): void {
    console.log('delete task');
  }
  onComplete(): void {
    console.log('complete task');
  }
}
