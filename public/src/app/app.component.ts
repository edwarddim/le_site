import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _http:HttpClient, private _router:Router, private titleService: Title){}

  ngOnInit(){
    this._router.navigate(['/home']);
    this.titleService.setTitle('Learning Edge');
  }
}
