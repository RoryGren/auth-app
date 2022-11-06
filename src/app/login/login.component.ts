import { user } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = "";
  pwd : string = "";
  errorCondition: boolean = false;
  error : string = "Invalid username and/or password";

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.username = (<HTMLInputElement>document.getElementById('username')).value;
    this.pwd = (<HTMLInputElement>document.getElementById('pwd')).value;
    this.errorCondition = (this.username != "JosephMacSoap" && this.pwd != "SingASong") ? true : false;

    console.log("Username: " + this.username);
    console.log("Pwd: " + this.pwd);
  }

}
