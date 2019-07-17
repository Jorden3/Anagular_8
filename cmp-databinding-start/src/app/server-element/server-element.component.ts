import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef,
  ContentChild
} from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('Contrsuctor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('changes called');

  }

  ngOnInit() {
    console.log('On init called');
    console.log(this.paragraph.nativeElement.textContent);

  }

  ngDoCheck() {
    console.log('ngDOCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log('ngAfterContentCHecked called');

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');

  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestory');
  }
}
