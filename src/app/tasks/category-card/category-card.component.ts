import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryInterface } from '../category-interface';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent {
  @Input() categoryCardInfo!: CategoryInterface;
  @Output() categoryCardAction = new EventEmitter;

  onClick(): void {
    this.categoryCardAction.emit()
  }
}
