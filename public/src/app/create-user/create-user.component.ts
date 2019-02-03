import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

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
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    this.errorMessages = {
      f_name: {message: ""},
      l_name: {message: ""},
      city: {message: ""},
      street_address: {message: ""},
      zip: {message: ""},
      phone: {message: ""}
    };
  };
  onSubmit(){
    this.user.uid = this.storage.get('uid')
    this.user.email = this.storage.get('email')
    let observ = this._httpService.createUser(this.user);
    observ.subscribe((data:any)=>{
      if(data.errors){
        this.errorMessages = {
          f_name: {message: ""},
          l_name: {message: ""},
          city: {message: ""},
          street_address: {message: ""},
          zip: {message: ""},
          phone: {message: ""}
        };
        if(data.errors['f_name']){
          this.errorMessages['f_name']['message'] = "error";
        }
        if(data.errors['l_name']){
          this.errorMessages['l_name']['message'] = "error";
        }
        if(data.errors['phone']){
          this.errorMessages['phone']['message'] = "error";
        }
        if(data.errors['city']){
          this.errorMessages['city']['message'] = "error";
        }
        if(data.errors['street_address']){
          this.errorMessages['street_address']['message'] = "error";
        }
        if(data.errors['zip']){
          this.errorMessages['zip']['message'] = "error";
        }
      }
      else{
        this._router.navigate(['/students'])
      };
      });
    };
};

