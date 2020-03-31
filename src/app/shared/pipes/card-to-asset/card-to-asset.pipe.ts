import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../../models/card';

@Pipe({
  name: 'cardToAsset'
})
export class CardToAssetPipe implements PipeTransform {

  transform(card: Card): string {
    const cardName = `${card.value}_of_${card.suit}.png`;
    return `assets/cards/${cardName}`;
  }

}
