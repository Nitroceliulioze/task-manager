import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { TaskInterface } from '../task-interface';
import { CreateListComponent } from '../create-list/create-list.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  closeMessage = 'closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TaskInterface[],
    private ref: MatDialogRef<CreateTaskComponent>,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  taskForm = this.fb.group({
    taskTitle: this.fb.control(''),
    taskDate: this.fb.control(''),
    taskCategory: this.fb.control(''),
  });

  tasks!: TaskInterface[];
  // = [
  //   {
  //     taskId: 1,
  //     taskTitle: 'Task 1',
  //     taskDate: '08/17/2023',
  //     taskCategory: 'Meetings',
  //   },
  //   {
  //     taskId: 2,
  //     taskTitle: 'Task 2',
  //     taskDate: '03/17/2023',
  //     taskCategory: 'Birthdays',
  //   },
  //   {
  //     taskId: 3,
  //     taskTitle: 'Task 3',
  //     taskDate: '01/17/2023',
  //     taskCategory: 'Test',
  //   },
  // ];

  ngOnInit(): void {
    this.tasks = this.data;
    console.log(this.tasks);
  }
  onSubmit(): void {
    console.log('save');
  }
  closeCreateTask(): void {
    this.ref.close('Closed using function');
    console.log('close');
  }
  openCreateListDialog() {
    this.dialog.open(CreateListComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
  saveTask() {
    console.log(this.taskForm.value);
  }
}
