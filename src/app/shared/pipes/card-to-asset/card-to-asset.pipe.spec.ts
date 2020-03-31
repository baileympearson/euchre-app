import { CardToAssetPipe } from './card-to-asset.pipe';
import { Card } from '../../models/card';

describe('CardToAssetPipe', () => {
  it('create an instance', () => {
    const pipe = new CardToAssetPipe();
    expect(pipe).toBeTruthy();
  });
  it('correctly format a card name', () => {
    const pipe = new CardToAssetPipe();
    const card: Card = { suit: 'clubs', value: '9'};
    const expectedValue = `assets/cards/9_of_clubs.png`;
    expect(pipe.transform(card)).toBe(expectedValue);
  });
});
