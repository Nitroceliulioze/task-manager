import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CategoryTaskListComponent } from './tasks/category-task-list/category-task-list.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { CreateListComponent } from './tasks/create-list/create-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'tasks/edit', component: CreateTaskComponent },
  {
    path: 'categories',
    component: CategoryTaskListComponent,
    data: { categoryTitle: 'Category Title' },
  },
  { path: 'categories/edit', component: CreateListComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
