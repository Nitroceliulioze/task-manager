import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTaskListComponent } from './category-task-list.component';

describe('CategoryTaskListComponent', () => {
  let component: CategoryTaskListComponent;
  let fixture: ComponentFixture<CategoryTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
