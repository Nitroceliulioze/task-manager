import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-task-list',
  templateUrl: './category-task-list.component.html',
  styleUrls: ['./category-task-list.component.css']
})
export class CategoryTaskListComponent {
  categoryTitle!: string;
  tasks: TaskInterface[] = [
    { taskTitle: 'Task 1', taskDate: '08/17/2023' },
    { taskTitle: 'Task 2', taskDate: '03/17/2023' },
    { taskTitle: 'Task 3', taskDate: '01/17/2023' },
  ];
  @Output() taskAction= new EventEmitter();

  constructor(private route: ActivatedRoute) {
    this.categoryTitle = this.route.snapshot.data['categoryTitle']
  }
 
  onTaskAcion():void {
    console.log('Task Action clicked')
  }
  showDialogMenu: boolean = false;

onClick() {
  this.taskAction.emit()
  this.showDialogMenu = !this.showDialogMenu;
}
}
