import { Component, OnInit } from '@angular/core';
import { CrudApiService } from 'src/app/service/crud-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Data:any;

  constructor(
    private crudApi:CrudApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.crudApi.ReadData().subscribe(response=>{
      console.log(response);
      this.Data=response;
    });
  }
  redirect(){
    this.router.navigate(['/add']);
  }

}
