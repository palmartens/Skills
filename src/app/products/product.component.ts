import { Component } from "@angular/core";

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styles: ['div {font-weight: bolder; color:darkgreen;}']
})

export class ProductComponent {
    showDiv = false;
}