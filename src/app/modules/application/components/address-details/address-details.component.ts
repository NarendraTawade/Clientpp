import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css'],
})
export class AddressDetailsComponent implements OnInit {
  street: any = '';
  city: any = '';
  state: any = '';
  addrDetails: any;
  emptyField: any;

  constructor(private router: Router, private _sharedService: SharedService) {}
  // ngDoCheck(): void {
  //   this.checkAddressDetails();
  // }

  ngOnInit(): void {
    this.getAddressDetails();
    this.checkAddressDetails();
  }

  public nextBtnClick(e: any) {
    console.log(e);
    this.street = e.street.value;
    this.city = e.city.value;
    this.state = e.state.value;
    this.checkAddressDetails();
    this._sharedService.updateAddressDetails(e);
    this.router.navigateByUrl('/review-data');
  }

  public backBtnClick(e: any) {
    console.log(e);
    this._sharedService.updateAddressDetails(e);
    this.checkAddressDetails();
    this.router.navigateByUrl('/personal-details');
  }

  public getAddressDetails() {
    this.addrDetails = this._sharedService.sendAddressDetails();
    console.log(this.addrDetails);
    this.street = this.addrDetails.street.value;
    this.city = this.addrDetails.city.value;
    this.state = this.addrDetails.state.value;
  }

  public checkAddressDetails() {
    if ((this.street && this.city && this.state) == '') {
      this.emptyField = true;
    } else {
      this.emptyField = false;
    }
    this._sharedService.checkAddressDetails(this.emptyField);
  }
}
