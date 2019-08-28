import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl } from '@angular/forms'
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-user-contactus',
  templateUrl: './user-contactus.component.html',
  styleUrls: ['./user-contactus.component.css']
})
export class UserContactusComponent implements OnInit {

  msg = {
    from: '',
    subject: '',
    text: '',
    name:''
  }
  msgError = {
    from: '',
    subject: '',
    text: '',
    name: ''
  }
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {

  }
  onSubmit(){
    this.msgError = {
      from: '',
      subject: '',
      text: '',
      name: ''
    }

    var validateEmail = new FormControl(this.msg.from, Validators.email)
    var checkEmail = new FormControl(this.msg.from, Validators.required)
    var validateSubject = new FormControl(this.msg.subject, Validators.required)
    var validateText = new FormControl(this.msg.text, Validators.required)
    var validateName = new FormControl(this.msg.name, Validators.required)

    
    if(validateEmail.errors != null || checkEmail.errors != null){
      this.msgError.from = 'false';
    }
    if(validateSubject.errors != null){
      this.msgError.subject = 'false';
    }
    if(validateText.errors != null){
      this.msgError.text = 'false';
    }
    if(validateName.errors != null){
      this.msgError.name = 'false';
    }
  };

}
