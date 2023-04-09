import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
})
export class PersonalDetailsComponent implements OnInit, DoCheck {
  fName: any = '';
  lName: any = '';
  email: any = '';
  mobileNumber: any = '';
  emptyField :boolean =true ;

  personalDetails: any = [];

  constructor(private router: Router, private _sharedService: SharedService) {}
  ngDoCheck(): void {
    this.checkPersonalDetails()
  }

  ngOnInit(): void {
    this.getPersonalDetails();
    this.checkPersonalDetails()
  }

  public btnClick(e: any) {
    console.log(e);
    this.fName = e.fName.value;
    this.lName = e.lName.value;
    this.email = e.email.value;
    this.mobileNumber = e.mobileNumber.value;

    this.personalDetails = {
      firstName: this.fName,
      lastName: this.lName,
      emailId: this.email,
      mobileNumber: this.mobileNumber,
    };

    this.checkPersonalDetails()

    this._sharedService.updatePersonalDetails(this.personalDetails);
    this.router.navigateByUrl('/address-details');
  }

  getPersonalDetails() {
    this.personalDetails = [];
    this.personalDetails = this._sharedService.sendPersonalDetails();
    this.fName = this.personalDetails[0].firstName;
    this.lName = this.personalDetails[0].lastName;
    this.email = this.personalDetails[0].emailId;
    this.mobileNumber = this.personalDetails[0].mobileNumber;
  }

  checkPersonalDetails(){

    console.log(this.fName);
    
    if((this.fName&&this.lName&&this.email&&this.mobileNumber) ==''){
      this.emptyField=true;
    }
    else{
      this.emptyField=false;
    }
    this._sharedService.checkPersonalDetails(this.emptyField);
  }

  
}
