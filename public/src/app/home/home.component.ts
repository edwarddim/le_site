import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPics = [];
  firstPic: any;
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    let observ = this._httpService.getFrontPics();
    observ.subscribe((data:any)=>{
      for(let i = 0; i < data.length; i++){
        if(i==0){
          this.firstPic = data[i]
        }
        else{
          this.allPics.push(data[i])
        }
      }
    })
  }

}
