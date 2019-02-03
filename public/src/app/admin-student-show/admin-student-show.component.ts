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
  parent = {
    city: "",
    email:"",
    f_name: "",
    l_name: "",
    street_address: "",
    phone:"",
    zip:""
  };
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
        let parent = this._httpService.getParent(this.student.parent_id);
        parent.subscribe((data:any)=>{
          this.parent = data[0];
        })
      })
    })
  };
}