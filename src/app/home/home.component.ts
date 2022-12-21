import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerName: string = 'Philippe';
  email: string;
  password: string;

  onSubmit(form: NgForm) {
    console.log("FORM Value:", form.value);
  }

  ngOnInit() {

  }

}
