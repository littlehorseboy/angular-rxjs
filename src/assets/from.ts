import { from } from 'rxjs';

const data = from(new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      // throw Error('haha');
      resolve('haha');
    } catch(e) {
      reject(e);
    }
  }, 2000);
}));

data.subscribe({
  next(value) { console.log(value); },
  error(error) { console.warn(error); },
  complete() { console.log('Complete'); },
});
