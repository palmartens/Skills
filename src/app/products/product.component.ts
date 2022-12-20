import { Component } from "@angular/core";
declare const genRandomNumbers: any;

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styles: ['div {font-weight: bolder; color:darkgreen;}']
})

export class ProductComponent {
    employees = [
        {
            name: "Axle",
            employeeID: 1234,
            department: "IT"
        },
        {
            name: "Philippe",
            employeeID: 666,
            department: "R&D"
        },
        {
            name: "John",
            employeeID: 777,
            department: "IT"
        }   
    ];
}