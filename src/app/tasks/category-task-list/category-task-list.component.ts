import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-category-task-list',
  templateUrl: './category-task-list.component.html',
  styleUrls: ['./category-task-list.component.css'],
})
export class CategoryTaskListComponent implements OnInit {
  tasks: TaskInterface[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TasksService
  ) {
    // this.categoryTitle = this.route.snapshot.data['categoryTitle']; Cia turi buti observable kad perduotu data
  }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((tasks) => (this.tasks = tasks));
    // cia turetu but get tasks by category ir pakurt nauja const categoryTitle kuri renderintu virsuje
  }

  onEdit(): void {
    // this.router.navigate(['/categories/edit']);
  }
  onDelete(): void {
    console.log('delete list');
  }
}
