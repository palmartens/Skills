import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// declare const genRandomNumbers: any;

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
    @Output() c_newProductEvent = new EventEmitter<string>();

    inStock: number = 10;
    child1Method() {
        console.log("A method in the prodcut component - the child!");
    }
    
    addProduct(value: string){
        this.c_newProductEvent.emit(value);
    }


    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<jsonData[]>("https://jsonplaceholder.typicode.com/todos").subscribe(returnData => {
            this.todos = returnData;
        });
    }
    
}