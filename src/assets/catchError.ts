import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const data = new Observable((observer) => {
  observer.next('null');
  throw new Error('two error');
});

data
  .pipe(
    map((value) => {
      if (!value) {
        throw new Error('Value expected!');
      }
      return value;
    }),
    catchError((error) => of(error))
  )
  .subscribe({
    next(value) { console.log(`data: ${value}`); },
    error(error) { console.warn(error); },
  });
