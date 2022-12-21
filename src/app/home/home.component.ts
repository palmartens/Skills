import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerName: string = 'Philippe';
  email: string;
  password: string;
  private endPoint: string = 'http://localhost:3000/customers';

  onSubmit(form: NgForm) {
    // console.log("FORM Value:", form.value);
    this.http.post(this.endPoint, form.value).subscribe(returnData => {
      console.log("Post finished, data:",returnData);
    });
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {

  }

}
