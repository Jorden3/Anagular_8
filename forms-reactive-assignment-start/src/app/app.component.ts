import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  status = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required], this.forbiddenNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  // forbiddenNames(control: FormControl): {[s: string]: boolean}{
  //   if (control.value === 'test'){
  //     return {'nameIsForbidden': true};
  //   } else {
  //     return null;
  //   }
  // }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    // const obs = new Observable((observer) =>{
    //   setTimeout(() => {
    //     if (control.value === 'test@test.com') {
    //       observer.next({'nameIsForbidden': true });
    //     } else {
    //       observer.next(null);
    //     }
    //   }, 1500);
    // });

    // return obs;

    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
