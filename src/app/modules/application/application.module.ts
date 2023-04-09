import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationRoutingModule } from './application-routing.module';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { ReviewDataComponent } from './components/review-data/review-data.component'



@NgModule({
  declarations: [
    PersonalDetailsComponent,
    AddressDetailsComponent,
    ReviewDataComponent,

    
  ],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    ApplicationRoutingModule,
  ], 
  exports:[
    PersonalDetailsComponent,
  ]
})
export class ApplicationModule { }
