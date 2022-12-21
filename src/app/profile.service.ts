import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private isLoggedIn: boolean;

  constructor() { }

  public loggedInStatus() {
    // check if user is logged in
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }
}
