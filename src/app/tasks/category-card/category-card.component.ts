import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent {
  @Input() categoryTitle!: string;
  @Input() countListItems!: string;
  @Output() categoryCardAction = new EventEmitter;

  constructor (private router: Router) {}
  
  onClick(): void {
    this.categoryCardAction.emit()
  }
}
