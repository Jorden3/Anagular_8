import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firsObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firsObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customInstervaObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 5){
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error ('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });



    this.firsObsSubscription =     customInstervaObservable
    .pipe(filter(data => {
      return data > 0;
    }),map((data: number) =>{
      return 'Round: ' + (data);
    }))
    .subscribe(data => {
      console.log(data);
    }, err =>{
        alert(err.message);
    }, () =>{
      console.log('Completed');
    });
  }

  ngOnDestroy() {
    this.firsObsSubscription.unsubscribe();
  }

}
