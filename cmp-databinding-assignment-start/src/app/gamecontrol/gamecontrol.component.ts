import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() gameStart = new EventEmitter<number>();
  stop;
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

  gamePlaying() {
    this.stop = setInterval(() => {
      this.gameStart.emit(++this.counter);
    }, 1000);
  }

  gameStop() {
    clearInterval(this.stop);
  }
}
