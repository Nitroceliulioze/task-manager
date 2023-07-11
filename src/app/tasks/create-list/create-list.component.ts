import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css'],
})
export class CreateListComponent {
  constructor(
    private ref: MatDialogRef<CreateListComponent>,
    private fb: FormBuilder
  ) {}

  listForm = this.fb.group({
    taskCategory: this.fb.control(''),
  });

  onCloseDialog(): void {
    this.ref.close();
    console.log('close list');
  }

  saveList() {
    console.log(this.listForm.value);
  }
}
