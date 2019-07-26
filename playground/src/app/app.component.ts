import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground';
  value = 0;

  onClick() {
    const subscription = interval(1000).subscribe(value => {this.value = ++value; console.log(value)} );
    setTimeout(() => subscription.unsubscribe(), 3000);
  }
}
