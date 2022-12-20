import { Component, Input } from "@angular/core";
declare const genRandomNumbers: any;

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styles: ['div {font-weight: bolder; color:darkgreen;}']
})

export class ProductComponent {
    @Input() p_title: string;
    
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

    page: number = 1;
    itemsToDisplay: number = 10;
    
    rNum = <[]>genRandomNumbers().filter((x: number) => {
        return x < 2000;
    });


    pageChanged(event: any) {
        this.page = event
    }
}