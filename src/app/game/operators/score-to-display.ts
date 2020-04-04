import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function scoreToDisplay(score$: Observable<number>) {
  return score$.pipe(
    map(score => {
      const array = Array(5);
      for (let i = 0; i < 5; ++i) {
        array[i] = i < score ? 'filled' : 'empty';
      }
      return array;
    })
  );
};