import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// const nums = of(1, 2, 3);

// const squareValues = map((val: number) => val * val);
// const squaredNums = squareValues(nums);

// squaredNums.subscribe(x => console.log(x));

of(1, 2, 3)
  .pipe(map((value) => value * value))
  .subscribe((value) => console.log(value));
