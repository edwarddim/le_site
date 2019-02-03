import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-admin-picture',
  templateUrl: './admin-picture.component.html',
  styleUrls: ['./admin-picture.component.css']
})
export class AdminPictureComponent implements OnInit {

  frontPics = [];
  galleryPics = [];
  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    if(this.storage.get('adminLog') != true){
      this._router.navigate(['/admin'])
    }
    let front = this._httpService.getFrontPics();
    front.subscribe((data:any)=>{
      this.frontPics = data;
    })
    let gallery = this._httpService.getGalleryPics();
    gallery.subscribe((data:any)=>{
      this.galleryPics = data;
    })
  };

  deletePic(id){
    let observ = this._httpService.deletePic(id);
    observ.subscribe((data:any)=>{
      this.ngOnInit();
    })
  }

  frontPage(event){
    let observ = this._httpService.uploadFrontPic(event.target.files[0])
    observ.subscribe((data:any)=>{
      console.log(data)
      this.ngOnInit();
    })
  }

  galleryPage(event){
    let observ = this._httpService.uploadGalleryPic(event.target.files[0])
    observ.subscribe((data:any)=>{
      console.log(data)
      this.ngOnInit();
    })
  }

}
