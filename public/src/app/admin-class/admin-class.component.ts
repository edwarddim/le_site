import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-admin-class',
  templateUrl: './admin-class.component.html',
  styleUrls: ['./admin-class.component.css']
})
export class AdminClassComponent implements OnInit {

  class = {
    title: "",
    grade: "",
    capacity:0
  }
  allClass = [];
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    if(this.storage.get('adminLog') != true){
      this._router.navigate(['/admin'])
    }
    let observ = this._httpService.getAllClass();
    observ.subscribe((data:any)=>{
      this.allClass = data;
    })
  }

  onSubmit(){
    let observ = this._httpService.createClass(this.class);
    observ.subscribe((data:any)=>{
      this.ngOnInit();
      this.class = {
        title: "",
        grade: "",
        capacity:0
      }
    })
  }

}
