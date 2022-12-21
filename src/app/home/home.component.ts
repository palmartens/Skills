import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isLoggedIn: boolean = false;


  constructor(private profileService: ProfileService) {
    
  }

  ngOnInit() {
    this.isLoggedIn = this.profileService.loggedInStatus();
  }


}
