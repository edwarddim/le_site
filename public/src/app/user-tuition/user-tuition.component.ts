import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-user-tuition',
  templateUrl: './user-tuition.component.html',
  styleUrls: ['./user-tuition.component.css']
})
export class UserTuitionComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  tuition:any;
  allPolicy:any;
  ngOnInit() {
    let observ = this._httpService.getAllTuition();
    observ.subscribe((data:any)=>{
      this.tuition = data;
    })
    let policyObserv = this._httpService.getPolicy();
    policyObserv.subscribe((data:any)=>{
      this.allPolicy = data;
    })
  }

}
