import { Component } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  isCreateListOpen: boolean = false;

  openCreateList():void{
    this.isCreateListOpen = true;
  }

  onSubmit():void {
    console.log('save')
  }
}
