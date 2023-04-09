import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  projectForm: any;
  isSubmitted: boolean = false;
  users: any;
  employeeData : any ;

  constructor(private fb: FormBuilder, private ser: SharedService, private _router : Router) {}

  ngOnInit(): void {

    this.getUsers();
    // method  initialization
    this.initiateProjectForm();
    // this.setProjectFormValues ();
    this.initiatemyForm();

    // this.projectForm.valueChanges.subscribe((data:any)=>{
    //   console.log(data);
    // })

    // this.projectForm.get('projectData.projectName').statusChanges.subscribe((stat:any)=>{
    //   console.log(stat);
    // })
  }

  postData(){
    this._router.navigateByUrl('data-post')
  }

  public getUsers() {
    this.ser.getUsers().subscribe((data:any)=>{
      this.users = data
      console.log(this.users);
  })
  }
  public initiateProjectForm() {
    this.projectForm = new FormGroup({
      projectData: new FormGroup({
        projectName: new FormControl(null, [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(10),
          CustomValidators.invalidProjectName,
        ]),
        email: new FormControl(null, [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ]),
        projectStatus: new FormControl('stable', Validators.required),
      }),
      projectEstimate: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
      ]),
      projectOwner: new FormArray([
        new FormControl('Narendra'),
        new FormControl('Developer'),
      ]),
      employees: new FormArray([
        this.fb.group({
          name: ['Narendra Tawade'],
          department: new FormControl('Development'),
          experience: new FormControl('1 Year'),
        }),
      ]),
      managers: new FormArray([
        this.fb.group({
          name: new FormControl('Gautam'),
          age: new FormControl('36'),
        }),
      ]),
    });
  }

  obj = {
    projectName: 'NFP',
    email: 'nfp@gmail.com',
  };

  public setProjectFormValues() {
    // this.projectForm.patchValue(this.obj);
    this.projectForm.get('projectData').patchValue(this.obj);
  }

  public initiatemyForm() {
    // this.myForm= new FormGroup({
    //   'fName' : new FormControl('Narendra', [(Validators.required)]),
    //   'lName' : new FormControl('Tawade', [(Validators.required)]),
    //   'email' : new FormControl('narendratawade97@gmail.com', [(Validators.required, Validators.email)]),
    //   'mobileNumber' : new FormControl(99999999999, [(Validators.required, Validators.maxLength(10))])
    // })
  }

  // onSubmit() {
  //   console.log(this.myForm);
  // }

  submitProject() {
    this.isSubmitted = true;
    if (this.projectForm.status == 'VALID') {
      console.log(this.projectForm);
      console.log(
        this.projectForm.controls.projectData.controls['projectName']['touched']
      );
      console.log(this.projectForm.value.employees);
      this.employeeData = this.projectForm.value.employees;
      
    } else {
      alert('Please check the form details');
    }
    // console.log(this.projectForm.controls.projectData.controls['projectName'].errors);
    // console.log(this.projectForm.controls['projectEstimate']?.errors);
    // console.log(this.projectForm.controls.projectData.controls['projectName']['errors']['required']);
  }

  get employees(): FormArray {
    return this.projectForm.get('employees') as FormArray;
  }
  get projectOwner(): FormArray {
    return this.projectForm.get('projectOwner') as FormArray;
  }

  addEmp() {
    let empArr = this.employees;
    let newEmp = this.fb.group({
      name: [],
      department: [],
      experience: [],
    });
    empArr.push(newEmp);
  }
  addOwner() {
    let ownerArr = this.projectOwner;
    let newOwner = new FormControl();
    ownerArr.push(newOwner);
  }

  removeEmp(e: any) {
    let empArr = this.employees;
    empArr.removeAt(e);
  }
}
