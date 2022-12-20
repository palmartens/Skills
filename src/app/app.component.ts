import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() title: string = 'Skills';

  p_addProduct(newProduct: string) {
    console.log(newProduct)
  }
}
