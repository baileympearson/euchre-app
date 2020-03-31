import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../../models/card';

@Pipe({
  name: 'cardToCardName'
})
export class CardToCardNamePipe implements PipeTransform {

  transform(card: Card): unknown {
    return `${card.value}_of_${card.suit}`;
  }

}
