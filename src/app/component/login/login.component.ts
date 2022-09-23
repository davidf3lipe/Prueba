import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

export var login_flag: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email_default: string="info@yampi.co";
  password_default: string="12345678";

  email!: string;
  password!: string;
  login_flag!:number;

  constructor(private cookies: CookieService,private router: Router) {}

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  login() {

    console.log(this.email);
    console.log(this.password);
    if(this.email == this.email_default && this.password == this.password_default){
      alert("Login Success");
      console.log("Login Success");
      this.router.navigate(['/home']);
      //this.login_flag= 1;

    }
    else{
      console.log("Login Denied");
      alert("Login Denied");
    }
  }
}