import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-non-bindable-example',
  templateUrl: './ng-non-bindable-example.component.html',
  styleUrls: ['./ng-non-bindable-example.component.css']
})
export class NgNonBindableExampleComponent implements OnInit {
  content: string;
  constructor() {
    this.content = 'asdf';
  }

  ngOnInit() {
  }

}
