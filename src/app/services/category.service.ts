import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryInterface } from '../tasks/category-interface';
import { Observable } from 'rxjs';

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

  deleteCategory(category: CategoryInterface): Observable<CategoryInterface> {
    const url = `${this.apiURL}/${category.id}`;
    return this.http.delete<CategoryInterface>(url);
  }
}
