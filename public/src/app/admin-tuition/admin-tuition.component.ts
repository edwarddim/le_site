import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-admin-tuition',
  templateUrl: './admin-tuition.component.html',
  styleUrls: ['./admin-tuition.component.css']
})
export class AdminTuitionComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  tuition = {
    session: "",
    year: "",
    line1: "",
    line2: "",
    line3: "",
    line4: "",
    line5: "",
    line6: "",
    line7: "",
    line8: "",
    line9: "",
    line10: "",
    line11: "",
    line12: "",
    line13: "",
    line14: "",
    line15: "",
    line16: "",
    line17: "",
    line18: "",
    line19: "",
    line20: "",
    line21: "",
    line22: "",
    line23: "",
    line24: "",
    line25: "",
    line26: "",
    line27: "",
    line28: "",
    line29: "",
    line30: ""
  }
  allTuition = []

  ngOnInit() {
    if(this.storage.get('adminLog') != true){
      this._router.navigate(['/admin'])
    }
    let observ = this._httpService.getAllTuition();
    observ.subscribe((data:any)=>{
      this.allTuition = data;
    })
    this.tuition = {
      session: "",
      year: "",
      line1: "",
      line2: "",
      line3: "",
      line4: "",
      line5: "",
      line6: "",
      line7: "",
      line8: "",
      line9: "",
      line10: "",
      line11: "",
      line12: "",
      line13: "",
      line14: "",
      line15: "",
      line16: "",
      line17: "",
      line18: "",
      line19: "",
      line20: "",
      line21: "",
      line22: "",
      line23: "",
      line24: "",
      line25: "",
      line26: "",
      line27: "",
      line28: "",
      line29: "",
      line30: ""
    }
  }

  onSubmit(){
    let observ = this._httpService.createTuition(this.tuition);
    observ.subscribe((data:any)=>{
      this.ngOnInit();
    })
  }
  deleteTuit(id){
    let observ = this._httpService.deleteTuit(id);
    observ.subscribe((data:any)=>{
      this.ngOnInit();
    })
  }

}
