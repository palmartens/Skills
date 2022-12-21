import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";


interface jsonData {
    userId: string;
    id: string;
    title: string;
    completed: boolean;
}

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styles: ['div {margin-top: 50px; margin-botton:20px; }']
})
export class ProductComponent implements OnInit {
    todos: jsonData[];

    @Input() p_title: string;
    
    inStock: number = 10;
    child1Method() {
        console.log("A method in the prodcut component - the child!");
    }
    
    ngOnInit() {
        
    }
    
}