import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-user-students',
  templateUrl: './user-students.component.html',
  styleUrls: ['./user-students.component.css']
})
export class UserStudentsComponent implements OnInit {

  user:any 
  students = []
  student = {
    f_name: "",
    l_name: "",
    grade: "",
    parent_id: "",
    e_contact1_name: "",
    e_contact1_relation: "",
    e_contact1_phone: "",
    e_contact2_name: "",
    e_contact2_relation: "",
    e_contact2_phone: "",
    school: ""
  }
  errorMessages: any;
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    if(!this.storage.get('uid')){
      this._router.navigate(['/registration'])
    };

    let observ = this._httpService.getUser();
    observ.subscribe((data:any)=>{
      this.user = data['0'];
      this.students = data['0'].students
    })

    this.errorMessages = {
      f_name: {message: ""},
      l_name: {message: ""},
      grade: {message: ""},
      e_contact1_name: {message: ""},
      e_contact1_relation: {message: ""},
      e_contact1_phone: {message: ""},
      school: {message: ""},
    };
    this.student = {
      f_name: "",
      l_name: "",
      grade: "",
      parent_id: this.storage.get('uid'),
      e_contact1_name: "",
      e_contact1_relation: "",
      e_contact1_phone: "",
      e_contact2_name: "",
      e_contact2_relation: "",
      e_contact2_phone: "",
      school: ""
    }
  }

  onSubmit(){
    let observ = this._httpService.addStudent(this.student);
    observ.subscribe((data:any)=>{
      if(data.errors){
        this.errorMessages = {
          f_name: {message: ""},
          l_name: {message: ""},
          grade: {message: ""},
          e_contact1_name: {message: ""},
          e_contact1_relation: {message: ""},
          e_contact1_phone: {message: ""},
          school: {message: ""}
        }
        if(data.errors['f_name']){
          this.errorMessages['f_name']['message'] = "error";
        }
        if(data.errors['l_name']){
          this.errorMessages['l_name']['message'] = "error";
        }
        if(data.errors['grade']){
          this.errorMessages['grade']['message'] = "error";
        }
        if(data.errors['e_contact1_name']){
          this.errorMessages['e_contact1_name']['message'] = "error";
        }
        if(data.errors['e_contact1_relation']){
          this.errorMessages['e_contact1_relation']['message'] = "error";
        }
        if(data.errors['e_contact1_phone']){
          this.errorMessages['e_contact1_phone']['message'] = "error";
        }
        if(data.errors['school']){
          this.errorMessages['school']['message'] = "error";
        }
      }
      else{
        this.ngOnInit();
      }
    })
  }

}
