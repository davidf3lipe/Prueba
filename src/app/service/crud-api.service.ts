import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { model } from './model';


@Injectable({
  providedIn: 'root'
})
export class CrudApiService {
GET:string="https://jsonplaceholder.typicode.com/posts";
POST:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private client:HttpClient) { }

  ReadData(){
    return this.client.get(this.GET) ;
  }
  AddData(data:model):Observable<any>{
    return this.client.post(this.POST,data);
  }

}
