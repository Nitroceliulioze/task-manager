import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: TaskInterface;
  @Output() taskAction = new EventEmitter();
  showDialogMenu = false;

  constructor(private router: Router) {}

  onClick() {
    this.taskAction.emit();
    this.showDialogMenu = !this.showDialogMenu;
  }

  onEdit(): void {
    this.router.navigate(['/tasks/edit']);
  }
  onDelete(): void {
    console.log('delete list');
  }
  onComplete(): void {
    console.log('complete task');
  }
}
