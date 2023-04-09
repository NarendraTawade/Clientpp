import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-my-data-post',
  templateUrl: './my-data-post.component.html',
  styleUrls: ['./my-data-post.component.css']
})
export class MyDataPostComponent implements OnInit {

  dataForm = new FormGroup({});

  constructor(private fb : FormBuilder, private sharedService : SharedService) { }

  ngOnInit(): void {
    this.initiatedataForm();
  }

  initiatedataForm(){
    this.dataForm = this.fb.group({
      name : [''],
      address : [''],
      phone : ['']
    })
  }

  onSubmit(){
    console.log(this.dataForm.value.name);
    this.addUser();
  }

  addUser(){
    const user ={
      name : this.dataForm.value.name,
      address : this.dataForm.value.address,
      phone : this.dataForm.value.phone
    }

    console.log(user);
    

    this.sharedService
    .addUser(user)
    .subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  updateUser(){
    this.sharedService.updateUser().subscribe({
      next : (res : any) => {
        console.log(res); 
      }, 
      error :(err : any) => {
         console.log(err);
      }
    })
  }



}
