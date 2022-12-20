import { NgModule } from '@angular/core';
import { ProductComponent } from '../products/product.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsFeatureModule { }
