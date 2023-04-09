import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-review-data',
  templateUrl: './review-data.component.html',
  styleUrls: ['./review-data.component.css']
})
export class ReviewDataComponent implements OnInit {
  personalDetails: any =[];
  fName: any;
  lName: any;
  email: any;
  mobileNumber: any;
  addrDetails: any;
  street: any;
  city: any;
  state: any;

  constructor(private _sharedService : SharedService, private router : Router, private cd : ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getPersonalDetails();
    this.getAddressDetails();
  }

  public getPersonalDetails(){
    this.personalDetails = this._sharedService.sendPersonalDetails();
    this.fName = this.personalDetails[0]?.firstName;
    this.lName = this.personalDetails[0]?.lastName;
    this.email = this.personalDetails[0]?.emailId;
    this.mobileNumber = this.personalDetails[0]?.mobileNumber;
  }

  public getAddressDetails(){
    this.addrDetails=this._sharedService.sendAddressDetails()
    console.log(this.addrDetails);
    this.street=this.addrDetails?.street.value;
    this.city=this.addrDetails?.city.value;
    this.state=this.addrDetails?.state.value;
  }

  public navigateToPersonalDetails(){
    this.router.navigateByUrl('/personal-details')
  }
  public navigateToAddressDetails(){
    this.router.navigateByUrl('/address-details')
  }

}
