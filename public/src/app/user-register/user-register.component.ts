import { Component, OnInit, Inject } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  fireLog: any;
  testresult: any
  constructor(private _httpService: HttpService, private _router:Router, 
              @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    var config = {
      apiKey: "AIzaSyCSEi9QOMSGTBpbCqo3-DuOXV_yc0F2eEY",
      authDomain: "le-website-78ad8.firebaseapp.com",
      databaseURL: "https://le-website-78ad8.firebaseio.com",
      projectId: "le-website-78ad8",
      storageBucket: "le-website-78ad8.appspot.com",
      messagingSenderId: "568996387999"
    };
    if(!firebase.apps.length){
      firebase.initializeApp(config);
    }

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        this.storage.set('uid', firebaseUser.uid);
        this.storage.set('email', firebaseUser.email);
        this.fireLog = true;
      }
      else{
          this.fireLog = false;
      }
    });

    const signbutton = document.getElementById('googbutton');
    const signbuttonout = document.getElementById('googbuttonout');
    var provider = new firebase.auth.GoogleAuthProvider();

    signbutton.addEventListener('click', e=>{
      firebase.auth().signInWithRedirect(provider).then(function(result){
        this.fireLog == true;
      }).catch(function(error){
        console.log("Error: ", error);
      });
    });

    signbuttonout.addEventListener('click', e=>{
      firebase.auth().signOut();
      this.fireLog == false;
      this.storage.remove('uid')
      this.storage.remove('email')
    });

  };

}
