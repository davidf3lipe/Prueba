import { Component, OnInit } from '@angular/core';
import { CrudApiService } from 'src/app/service/crud-api.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Data:any;
  userloggedin:any;

  constructor(
    private crudApi:CrudApiService,
    private router: Router,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.crudApi.ReadData().subscribe(response=>{
      console.log(response);
      this.Data=response;
      this.getUserLogged();
    });
  }

  getUserLogged() {
    this.loginService.getUser().subscribe(user => {
      this.userloggedin=user;
    });
  }
  redirect(){
    this.router.navigate(['/add']);
  }

}
