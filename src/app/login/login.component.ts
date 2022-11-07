import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = "";
  pwd : string = "";
  isLoggedIn: boolean = false;
  canShowLoginButton: boolean = false;
  errorCondition: boolean = false;
  error : string = "Invalid username and/or password";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.isLoggedIn = (this.username == "Joe" && this.pwd == "Soap") ? true : false;
    if (this.username == "Joe" && this.pwd == "Soap") {
      this.isLoggedIn = true;
      this.errorCondition = false;
      this.router.navigate(['/movies-list']);
    } else {
      this.isLoggedIn = false;
      this.errorCondition = true;
    }
  }

  onKeyUp(event: KeyboardEvent) {
    this.username = (<HTMLInputElement>document.getElementById('username')).value;
    this.pwd = (<HTMLInputElement>document.getElementById('pwd')).value;
    this.canShowLoginButton = (this.username != "" && this.pwd != "") ? true : false;
  }

  checkLoggedIn1() {
    return this.isLoggedIn;
  }
}
