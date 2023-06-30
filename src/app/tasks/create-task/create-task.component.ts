import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  isCreateListOpen!: boolean;
  @Output() closeDialog = new EventEmitter();
  @Output() onCloseDialog = new EventEmitter();

  openCreateList(): void {
    this.isCreateListOpen = true;
  }

  onSubmit(): void {
    console.log('save');
  }

  closeCreateList(): void {
    this.onCloseDialog.emit();
    
  }
  closeCreateTask(): void {
    this.closeDialog.emit();
    console.log('close');
  }
}
