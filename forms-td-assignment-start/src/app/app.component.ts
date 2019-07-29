import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSub = 'Advanced';
  @ViewChild('f', {static: true}) form: NgForm;

  onSubmit(){
    console.log(this.form);
  }
}
