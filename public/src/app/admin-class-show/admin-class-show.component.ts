import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-admin-class-show',
  templateUrl: './admin-class-show.component.html',
  styleUrls: ['./admin-class-show.component.css']
})
export class AdminClassShowComponent implements OnInit {

  classID = '';
  class = {
      title: '',
      grade: '',
      capcity: 0,
      description: ""
  }
  applied = [];
  accepted = [];
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.storage.get('adminLog') != true){
      this._router.navigate(['/admin'])
    }
    this.activatedRoute.params.subscribe(params=>{
      this.classID = params['id']
      let observ = this._httpService.getClass(this.classID);
      observ.subscribe((data:any)=>{
        this.class = data['0']
        this.applied = data['0'].applied
        this.accepted = data['0'].accepted
      })
    })
  };
  onClick(studentObj){
    let observ = this._httpService.acceptStudent(studentObj, this.classID);
    observ.subscribe((data:any)=>{
      this.ngOnInit();
    })
  };
  onUnenroll(studentObj){
    let observ = this._httpService.unenrollStudent(studentObj, this.classID);
    observ.subscribe((data:any)=>{
      this.ngOnInit();
    })
  };
  deleteClass(){
    let observ = this._httpService.deleteClass(this.classID)
    observ.subscribe((data:any)=>{
      this._router.navigate(['/admin'])
    })
  };

}
