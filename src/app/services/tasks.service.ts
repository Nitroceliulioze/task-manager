import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskInterface } from 'src/app/tasks/task-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiURL = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.apiURL);
  }
}
