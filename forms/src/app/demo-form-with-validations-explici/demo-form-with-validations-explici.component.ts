import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-form-with-validations-explici',
  templateUrl: './demo-form-with-validations-explici.component.html',
  styleUrls: ['./demo-form-with-validations-explici.component.css']
})
export class DemoFormWithValidationsExpliciComponent {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['',Validators.required]
    })

    this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string):void {
    console.log('you submitted value: ', value);
  }

}
