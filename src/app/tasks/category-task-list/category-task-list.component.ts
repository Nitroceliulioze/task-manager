import { Component, EventEmitter, Output } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-task-list',
  templateUrl: './category-task-list.component.html',
  styleUrls: ['./category-task-list.component.css'],
})
export class CategoryTaskListComponent {
  categoryTitle!: string;
  showDialogMenu = false;
  tasks: TaskInterface[] = [
    { taskTitle: 'Task 1', taskDate: '08/17/2023', taskCategory: 'Meetings' },
    { taskTitle: 'Task 2', taskDate: '03/17/2023', taskCategory: 'Birthdays' },
    { taskTitle: 'Task 3', taskDate: '01/17/2023', taskCategory: 'Meetings' },
  ];
  @Output() taskAction = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router) {
    this.categoryTitle = this.route.snapshot.data['categoryTitle'];
  }

  onTaskAcion(): void {
    console.log('Task Action clicked');
  }

  onClick() {
    this.taskAction.emit();
    this.showDialogMenu = !this.showDialogMenu;
  }

  onEdit(): void {
    this.router.navigate(['/categories/edit']);
  }
  onDelete(): void {
    console.log('delete list');
  }
}
