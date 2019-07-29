import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private subjectsub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subjectsub = this.userService.activatedEmmiter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }

  ngOnDestroy() {
    this.subjectsub.unsubscribe();
  }
}
