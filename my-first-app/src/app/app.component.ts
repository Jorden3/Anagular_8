import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';
  emptyName = false;

  onEmpty() {
    this.username = '';
  }

  checkLength() {
    this.emptyName = this.username.length > 0 ? true : false;
  }

}
