import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { CrudApiService } from 'src/app/service/crud-api.service';
import { Validators } from '@angular/forms';

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
      title:['',[Validators.required,Validators.minLength(3)]],
      body:['',[Validators.required,Validators.minLength(3)]],
      userId:['1']
    });
  }

  ngOnInit(): void {
  }
  addData():any{
    console.log(this.dataForm.value);

    if (this.dataForm.valid){
      this.postService.AddData(this.dataForm.value).subscribe();
    }
    else{
      alert("You must meet the form requeriments");
    }
  }
}
