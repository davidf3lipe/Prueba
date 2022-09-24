import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { CrudApiService } from 'src/app/service/crud-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dataForm:FormGroup;
  Data:any;
  Id:any;

  constructor(
    private idroute:ActivatedRoute, private crudEdit:CrudApiService,
    public datatoAdd:FormBuilder,
    private postService:CrudApiService,
    private router: Router
  ) 
  
  { 

    this.Id=this.idroute.snapshot.paramMap.get('id');
    this.crudEdit.editbyId("/"+this.Id).subscribe(
      response=>{
        this.dataForm.setValue({
          title:response['title'],
          body:response['body'],
        });
      }
    );

    this.dataForm=this.datatoAdd.group({
      title:['',[Validators.required,Validators.minLength(3)]],
      body:['',[Validators.required,Validators.minLength(3)]]
    });

  }

  ngOnInit(): void {

    };

    writeChanges(){
      if (this.dataForm.valid){
        this.postService.AddData(this.dataForm.value).subscribe();
        alert("Changes succesfully saved");
        this.router.navigate(['/home']);
      }
      else{
        alert("You must meet the form requeriments");
      }
    }
}
  
