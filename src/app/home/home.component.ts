import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerName: string = 'Philippe';
  email: string;
  password: string;
  observableData: Observable<any>;

  onSubmit(form: NgForm) {
    // console.log("FORM Value:", form.value);
    this.http.post('http://localhost:3000/customers', form.value).subscribe(returnData => {
      console.log("Post finished, data:",returnData);
    });
  }

  deleteDocument() {
    this.http.delete('http://localhost:3000/customers/1').subscribe(returnData => {
      console.log("Delete finished, data:",returnData);
    });    
  }

  constructor(private http: HttpClient) {
    this.observableData = http.get('http://localhost:3000/customers').pipe(
      tap(console.log),
      shareReplay()
    );
  }

  ngOnInit() {
    this.observableData.subscribe();
    this.observableData.subscribe();
    this.observableData.subscribe();
  }

}
