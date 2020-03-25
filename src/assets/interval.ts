import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const secondsCounter = interval(1000);

secondsCounter
  .pipe(
    // takeUntil(timer(5000)),
    takeUntil(timer(5001)),
  )
  .subscribe((n) => console.log(`It's been ${n} seconds since subscribing!`));
