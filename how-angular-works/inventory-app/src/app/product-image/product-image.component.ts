import {Component, HostBinding, Input} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent  {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
  constructor() { }


}
