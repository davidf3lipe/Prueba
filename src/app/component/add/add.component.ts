import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { CrudApiService } from 'src/app/service/crud-api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  dataForm:FormGroup;
  
  constructor(
    public datatoAdd:FormBuilder,private postService:CrudApiService) { 
    this.dataForm=this.datatoAdd.group({
      title:[''],
      body:['']
    });
  }

  ngOnInit(): void {
  }
  addData():any{
    console.log(this.dataForm.value);
    this.postService.AddData(this.dataForm.value).subscribe();
  }
}
