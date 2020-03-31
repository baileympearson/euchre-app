import { CardToCardNamePipe } from './card-to-card-name.pipe';
import { Card } from '../../models/card';

describe('CardToCardNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CardToCardNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should correctly transform a card', () => {
    const pipe = new CardToCardNamePipe();
    const cardToTransform: Card = {
      value: '9',
      suit: 'clubs'
    };
    expect(pipe.transform(cardToTransform)).toBe('9_of_clubs');
  });
});
