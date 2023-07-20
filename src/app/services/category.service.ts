import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryInterface } from '../tasks/category-interface';
import { Observable } from 'rxjs';
import { TaskInterface } from '../tasks/task-interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiURL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(this.apiURL);
  }

  getTasksForCategory(id: number): Observable<TaskInterface[]> {
    const url = `${this.apiURL}/${id}/tasks`;
    return this.http.get<TaskInterface[]>(url);
  }

  deleteCategory(id: number): Observable<CategoryInterface> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<CategoryInterface>(url);
  }

  deleteTask(task: CategoryInterface): Observable<CategoryInterface> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<CategoryInterface>(url);
  }

  taskCompleted(task: CategoryInterface): Observable<CategoryInterface> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<CategoryInterface>(url, task, httpOptions);
  }
}
