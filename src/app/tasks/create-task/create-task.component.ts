import { Component, EventEmitter, Output, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskInterface } from '../task-interface';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  isCreateListOpen!: boolean;

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onCloseDialog = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TaskInterface[],
    private ref: MatDialogRef<CreateTaskComponent>
  ) {}

  inputData!: TaskInterface[];

  ngOnInit(): void {
    this.inputData = this.data;
    console.log(this.inputData[0].taskCategory);
  }
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
    this.ref.close();
    console.log('close');
  }
}