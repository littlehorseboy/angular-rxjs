import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

import '../assets/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-rxjs';
  @ViewChild('hOne') hOneRef: ElementRef;

  ngAfterViewInit(): void {
    const mouseMoves = fromEvent(this.hOneRef.nativeElement, 'mousemove');

    const subscription = mouseMoves.subscribe((event: MouseEvent) => {
      console.log(`Coords: ${event.clientX} X ${event.clientY}`);

      if (event.clientX < 40 && event.clientY < 40) {
        subscription.unsubscribe();
      }
    });
  }
}
