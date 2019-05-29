import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-user-show-class',
  templateUrl: './user-show-class.component.html',
  styleUrls: ['./user-show-class.component.css']
})
export class UserShowClassComponent implements OnInit {

  classID = "";
  students = [];
  applyStudentID:any;
  applyStudent:any;
  user:any;
  class = {
    title: '',
    grade: '',
    capcity: 0,
    description: ""
  }
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  //   this.activatedRoute.params.subscribe(params=>{
  //     this.classID = params['id']
  //     let observ = this._httpService.getClass(this.classID);
  //     observ.subscribe((data:any)=>{
  //       this.class = data['0']
  //     })
  //   })
  };

  // onSubmit(){
  //   for(let i=0; i < this.students.length; i++){
  //     if(this.students[i]._id==this.applyStudent){
  //       this.applyStudent = this.students[i];
  //       let observ = this._httpService.addStudentToClass(this.applyStudent, this.classID)
  //       observ.subscribe((data:any)=>{
  //         console.log(data)
  //       })
  //     }
  //   }
  // }

}
