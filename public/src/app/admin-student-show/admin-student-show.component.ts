import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute} from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-admin-student-show',
  templateUrl: './admin-student-show.component.html',
  styleUrls: ['./admin-student-show.component.css']
})
export class AdminStudentShowComponent implements OnInit {

  studentID: any;
  student = {
    _id:"",
    f_name: "",
    l_name: "",
    grade: "",
    parent_id: "",
    street_address: "",
    city: "",
    zip: "",
    phone: "",
    guardian1_name: "",
    guardian1_email: "",
    guardian1_cell: "",
    guardian2_name: "",
    guardian2_email: "",
    guardian2_cell: "",
    e_contact1_name: "",
    e_contact1_relation: "",
    e_contact1_phone: "",
    e_contact2_name: "",
    e_contact2_relation: "",
    e_contact2_phone: "",
    school: "",
    notes: ""
  };
  errorMessages = {
    f_name: {message: ""},
    l_name: {message: ""},
    grade: {message: ""},
    street_address: {message: ""},
    city: {message: ""},
    zip: {message: ""},
    phone: {message: ""},
    guardian1_name: {message: ""},
    guardian1_email: {message: ""},
    guardian1_cell: {message: ""},
    guardian2_name: {message: ""},
    guardian2_email: {message: ""},
    guardian2_cell: {message: ""},
    e_contact1_name: {message: ""},
    e_contact1_relation: {message: ""},
    e_contact1_phone: {message: ""},
    school: {message: ""},
  };
  allergy = {
    type: "",
    severity: ""
  };
  dballergy = []
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.storage.get('adminLog') != true){
      this._router.navigate(['/admin'])
    }
    this.activatedRoute.params.subscribe(params=>{
      this.studentID = params['id']
      let observ = this._httpService.getStudentOnly(this.studentID)
      observ.subscribe((data:any)=>{
        this.student = data[0]
        this.dballergy = data[0].allergies
      })
    })
  };

  onEdit(){
    let observ = this._httpService.updateStudent(this.storage.get('uid'), this.student);
    observ.subscribe((data:any)=>{
      console.log("onEdit returned: ", data)
      if(data.errors){
        if(data.errors['f_name']){
          this.errorMessages['f_name']['message'] = "error";
        }
        if(data.errors['l_name']){
          this.errorMessages['l_name']['message'] = "error";
        }
        if(data.errors['grade']){
          this.errorMessages['grade']['message'] = "error";
        }
        if(data.errors['street_address']){
          this.errorMessages['street_address']['message'] = "error";
        }
        if(data.errors['city']){
          this.errorMessages['city']['message'] = "error";
        }
        if(data.errors['zip']){
          this.errorMessages['zip']['message'] = "error";
        }
        if(data.errors['phone']){
          this.errorMessages['phone']['message'] = "error";
        }
        if(data.errors['guardian1_name']){
          this.errorMessages['guardian1_name']['message'] = "error";
        }
        if(data.errors['guardian1_email']){
          this.errorMessages['guardian1_email']['message'] = "error";
        }
        if(data.errors['guardian1_cell']){
          this.errorMessages['guardian1_cell']['message'] = "error";
        }
        if(data.errors['guardian2_name']){
          this.errorMessages['guardian2_name']['message'] = "error";
        }
        if(data.errors['guardian2_email']){
          this.errorMessages['guardian2_email']['message'] = "error";
        }
        if(data.errors['guardian2_cell']){
          this.errorMessages['guardian2_cell']['message'] = "error";
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
    })
  };

  updateNotes(){
    let observ = this._httpService.updateStudentOnly(this.student._id, this.student);
    observ.subscribe((data:any)=>{

    })
  }
}