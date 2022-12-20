import { Component, EventEmitter, Input, Output } from "@angular/core";
declare const genRandomNumbers: any;

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styles: ['div {margin-top: 50px; margin-botton:20px; }']
})

export class ProductComponent {
    @Input() p_title: string;
    @Output() c_newProductEvent = new EventEmitter<string>();

    inStock: number = 10;
    child1Method() {
        console.log("A method in the prodcut component - the child!");
    }
    
    addProduct(value: string){
        this.c_newProductEvent.emit(value);
    }
    
}