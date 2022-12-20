import { Component } from "@angular/core";
declare const genRandomNumbers: any;

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styles: ['div {font-weight: bolder; color:darkgreen;}']
})

export class ProductComponent {
    showDiv = true;
    rNum = <[]>genRandomNumbers();
}