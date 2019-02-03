import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute} from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-userstudentshow',
  templateUrl: './userstudentshow.component.html',
  styleUrls: ['./userstudentshow.component.css']
})
export class UserstudentshowComponent implements OnInit {

  student = {
    f_name: "",
    l_name: "",
    grade: "",
    parent_id: ""
  };
  allergy = {
    type: "",
    severity: ""
  };
  errorMessages = {
    f_name: {message: ""},
    l_name: {message: ""},
    grade: {message: ""}
  };
  dballergy = []
  studentID:any;
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.studentID = params['id']
      let observ = this._httpService.getStudent(this.studentID)
      observ.subscribe((data:any)=>{
        this.student = data
        this.dballergy = data.allergies
      })
    })
  }

  onEdit(){
    let observ = this._httpService.updateStudent(this.storage.get('uid'), this.student);
    observ.subscribe((data:any)=>{
      console.log("onEdit returned: ", data)
      if(data.errors){
        this.errorMessages = {
          f_name: {message: ""},
          l_name: {message: ""},
          grade: {message: ""}
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
      }
    })
  };

  onSubmit(){
    const observ = this._httpService.createAllergy(this.studentID, this.allergy)
    observ.subscribe((data:any)=>{
      let observ = this._httpService.getStudent(this.studentID)
      observ.subscribe((data:any)=>{
        this.ngOnInit();
        this.allergy = {
          type: "",
          severity: ""
        }
        this.dballergy = [];
        this.dballergy = data.allergies
      })
    })
  };

}
