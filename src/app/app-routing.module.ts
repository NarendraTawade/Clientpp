import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDataPostComponent } from './components/my-data-post/my-data-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddressDetailsComponent } from './modules/application/components/address-details/address-details.component';
import { PersonalDetailsComponent } from './modules/application/components/personal-details/personal-details.component';
import { ReviewDataComponent } from './modules/application/components/review-data/review-data.component';

const routes: Routes = [
  {
    path: '',
    component : PersonalDetailsComponent
  },
  {
    path: 'personal-details',
    component : PersonalDetailsComponent
  },
  {
    path : 'address-details',
    component : AddressDetailsComponent
  },
  {
    path : 'review-data',
    component : ReviewDataComponent
  },
  {
    path : 'data-post',
    component : MyDataPostComponent
  },
  {
    path : 'not-found',
    component : NotFoundComponent
  },
  {
    path : '**',
    redirectTo :'not-found' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
