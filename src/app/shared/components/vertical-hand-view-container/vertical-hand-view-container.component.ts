import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vertical-hand-view-container',
  templateUrl: './vertical-hand-view-container.component.html',
  styleUrls: ['./vertical-hand-view-container.component.css']
})
export class VerticalHandViewContainerComponent {
  @Input() cards: Observable<Card[]>;
  @Input() placement: 'left' | 'right';

  getLeftAttribute(i: number) {
    return `${(i - 2) * 30 - 25}px`;
  }
}
