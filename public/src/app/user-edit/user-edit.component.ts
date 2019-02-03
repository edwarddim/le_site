import { Component, OnInit, Inject } from '@angular/core';
import * as firebase from 'firebase';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user = {
    uid: "",
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    street_address: "",
    city: "",
    zip: ""
  };
  errorMessages:any;
  update: any;
  constructor(private _httpService: HttpService, private _router:Router, 
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    let observ = this._httpService.getUser();
    observ.subscribe((data:any)=>{
      this.user = data[0];
    })
    this.errorMessages = {
      f_name: {message: ""},
      l_name: {message: ""},
      city: {message: ""},
      street_address: {message: ""},
      zip: {message: ""},
      phone: {message: ""}
    }
  };

  onSubmit(){
    let observ = this._httpService.updateUser(this.user);
    observ.subscribe((data:any)=>{
      if(data == "success"){
        this.update = true;
        this.ngOnInit();
      }
    })
  }

}
