import { of, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const nums = of(1, 2, 3, 4, 5);

const squareOddVals = pipe(
  filter((n: number) => n % 2 !== 0),
  map(n => n * n)
);

const squareOdd = squareOddVals(nums);

squareOdd.subscribe(x => console.log(x));

of(1, 2, 3, 4, 5)
  .pipe(
    filter((value) => value % 2 !== 0),
    map((value) => value * value),
  )
  .subscribe((value) => console.log(value));
