import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../models/card';
// import { Card } from '../../constants/interfaces';

@Component({
  selector: 'app-hand-viewer',
  templateUrl: './hand-view-container.component.html',
  styleUrls: ['./hand-view-container.component.css']
})
export class HandViewContainerComponent {
  @Input() cards: Observable<Card[]>;
  @Input() showFaceDown = false;
}
