import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGamePlaying($event) {
    console.log($event);
    if ($event % 2 === 0) {
      this.evenNumbers.push($event);
    } else {
      this.oddNumbers.push($event);
    }

  }
}
