import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-form-with-validations-shorthand',
  templateUrl: './demo-form-with-validations-shorthand.component.html',
  styleUrls: ['./demo-form-with-validations-shorthand.component.css']
})
export class DemoFormWithValidationsShorthandComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(value: any): void {
    console.log('you submitted value:', value.sku);
  }

}
