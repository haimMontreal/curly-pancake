import {Component, EventEmitter} from '@angular/core';
import {DadPipe} from '../../Controller/dad.pipe';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counterChange: EventEmitter<null> = new EventEmitter<null>();
  counter: number;
  output: string;
  star: string = "*";

  constructor() {
    this.counter = 0;
    this.counterChange.subscribe(
      () =>this.output = this.counter.toString()
    );
  }

  decreaseCounter() {
    this.counter--;
    this.counterChange.emit();
  }

  increaseCounter() {
    this.counter++;
    this.counterChange.emit();
  }
}
