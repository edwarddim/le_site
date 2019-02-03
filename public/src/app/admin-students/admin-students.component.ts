import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.css']
})
export class AdminStudentsComponent implements OnInit {

  f_name_txt = "";
  l_name_txt = "";
  student_list = [];
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    if(this.storage.get('adminLog') != true){
      this._router.navigate(['/admin'])
    }
    let observ = this._httpService.getAllStudents();
    observ.subscribe((data:any)=>{
      this.student_list = data;
    })
  }
  searchFirst(){
    let observ = this._httpService.findStudentByFirstName(this.f_name_txt);
    observ.subscribe((data:any)=>{
      this.student_list = data
    })
  }
  searchLast(){
    let observ = this._httpService.findStudentByLastName(this.l_name_txt);
    observ.subscribe((data:any)=>{
      this.student_list = data;
    })
  }

}
