import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input() buttonText!: string;
@Input() buttonColor!: string;
@Output() buttonAction = new EventEmitter()


onClick(): void {
  this.buttonAction.emit()
}
}