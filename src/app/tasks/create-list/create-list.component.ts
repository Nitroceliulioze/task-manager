import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css'],
})
export class CreateListComponent {
  constructor(
    private dialog: MatDialog,
    private ref: MatDialogRef<CreateListComponent>
  ) {}

  onCloseDialog(): void {
    this.ref.close();
    console.log('close list');
  }

  openCreateListDialog() {
    this.dialog.open(CreateListComponent, {});
  }
}
