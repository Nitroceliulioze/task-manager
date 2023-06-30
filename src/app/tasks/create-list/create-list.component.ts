import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css'],
})
export class CreateListComponent {
  @Output() closeDialog = new EventEmitter();

  onCloseDialog(): void {
    this.closeDialog.emit();
    console.log('close list')
  }
}
