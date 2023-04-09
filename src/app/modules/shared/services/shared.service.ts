import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { ProjectModel } from '../../projectModel.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { baseURL_List } from '../configs/api-url.config';


interface User {
  username : string;
  email : string;
  phone : string;
  address : any;
  company : any;
  id : number;
  website : string;
  name : string;

}

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _pesonalDetails: any = [];
  private _addressDetails: any;
  private _emptyFieldPd: boolean = true;
  private _emptyFieldAd: boolean = true;

  private _fieldCheckbox: any = {};
  private _emptyFieldSubject = new Subject();


  // public pm:ProjectModel =new ProjectModel();

  constructor(private _httpClient : HttpClient) {}


  // setValueToModel(data:any){
  //   this.pm=data;
  // }

  getUsers() : Observable<User> {
    const headers = new HttpHeaders({
      'content-type' : 'application/json',
      'authenticationToken' : '145sftftr5rwsstwgshgqwt25rw',
    });

    const params = new HttpParams()
    .set('pageNumber', 10)
    .set('pageSize', 200)
  
    return this._httpClient.get<User>(baseURL_List.GET_USER_LIST, {headers : headers, params : params}) 
  }

  addUser(data : any){
    console.log(data);
    const headers = new HttpHeaders({
      'AuthenticationKey' : 'hgghjjhjhR%8767%76767666vgbfgfghgyhgyhg'
    })

    const params = new HttpParams()
    .set('userId', data.id)
    .set('userName', data.name)
    
    return this._httpClient.post(baseURL_List.POST_USER, data, { headers : headers , params : params })
  }

  updateUser (){
    const updateUserData = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    return this._httpClient.put(baseURL_List.UPDATE_USER, updateUserData )
  }

  public getFieldArraySubjectObservable() {
    return this._emptyFieldSubject.asObservable();
  }
  public triggerCartSubject() {
    this._emptyFieldSubject.next(this._fieldCheckbox);
  }

  public updatePersonalDetails(e: any) {
    this._pesonalDetails = [];
    this._pesonalDetails.push(e);
    console.log(this._pesonalDetails);
  }

  public sendPersonalDetails() {
    return this._pesonalDetails;
  }

  public updateAddressDetails(e: any) {
    this._addressDetails = e;
    console.log(e);
  }

  public sendAddressDetails() {
    return this._addressDetails;
  }

  public checkPersonalDetails(e: any) {
    this._emptyFieldPd = e;
    this._fieldCheckbox = {
      emptyFieldPd: this._emptyFieldPd,
      emptyFieldAd: this._emptyFieldAd,
    };
    this.triggerCartSubject();
  }

  // public isCheckedPd (){
  //   return this._emptyFieldPd;
  // }

  public checkAddressDetails(e: any) {
    this._emptyFieldAd = e;
    this._fieldCheckbox = {
      emptyFieldPd: this._emptyFieldPd,
      emptyFieldAd: this._emptyFieldAd,
    };
    this.triggerCartSubject();
    console.log(this._fieldCheckbox);
  }

  // public isCheckedAd (){
  //   return this._emptyFieldAd;
  // }
}
