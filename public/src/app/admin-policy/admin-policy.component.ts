import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-admin-policy',
  templateUrl: './admin-policy.component.html',
  styleUrls: ['./admin-policy.component.css']
})
export class AdminPolicyComponent implements OnInit {

  policy={
    line1: ""
  }
  savedPolicy:any;
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    let observ = this._httpService.getPolicy()
    observ.subscribe((data:any)=>{
      this.savedPolicy = data;
    })
  };
  onSubmit(){
    let observ = this._httpService.createPolicy(this.policy)
    observ.subscribe((data:any)=>{

    })
    this.policy = {
      line1: ""
    }
    this.ngOnInit();
  };
  deletePolicy(policyID){
    let observ = this._httpService.deletePolicy(policyID)
    observ.subscribe((data:any)=>{

    })
    this.ngOnInit();
  };

}