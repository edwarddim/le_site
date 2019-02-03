import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-user-class',
  templateUrl: './user-class.component.html',
  styleUrls: ['./user-class.component.css']
})
export class UserClassComponent implements OnInit {

  allClass = [];
  logcheck: any;
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    let observ = this._httpService.getAllClass();
    observ.subscribe((data:any)=>{
      this.allClass = data;
    })
    if(!this.storage.get('uid')){
      this.logcheck = false;
    }
  }

}
