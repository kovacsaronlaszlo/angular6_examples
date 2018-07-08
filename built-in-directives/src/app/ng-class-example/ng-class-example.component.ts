import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent implements OnInit {
  isBordered: boolean;
  classesObj: Object;
  classList: string[];

  constructor() { }

  ngOnInit() {
    this.isBordered = true;
    this.classList = ['blue','round'];
    this.toggleBordered();
  }

  toggleBordered(): void {
    this.isBordered = !this. isBordered;
    this.classesObj = {
      bordered: this.isBordered
    };
  }

}
