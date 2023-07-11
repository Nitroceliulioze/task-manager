import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASKS } from 'src/app/tasks/mock-tasks';
import { TaskInterface } from 'src/app/tasks/task-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiURL = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.apiURL);
  }
}
