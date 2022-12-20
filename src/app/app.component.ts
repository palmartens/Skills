import { Component, Output, ViewChild } from '@angular/core';
import { ProductComponent } from './products/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() title: string = 'Skills';
  quantity: number = 0;

  @ViewChild(ProductComponent) product: ProductComponent;

  p_addProduct(newProduct: string) {
    console.log(newProduct)
  }

  ngAfterViewInit() {
    this.product.child1Method();
    this.quantity = this.product.inStock;
    console.log(this.quantity);
  }
}
