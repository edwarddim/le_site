import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute} from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  passcheck = "1315learningedge"
  password = ""
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.storage.get('adminLog')==true){
      this._router.navigate(['/admin'])
    }
  }

  onSubmit(){
    if(this.password == this.passcheck){
      this.storage.set('adminLog', true);
      this._router.navigate(['/admin'])
    }
    else{
      this.password = ""
    }
  }

}
