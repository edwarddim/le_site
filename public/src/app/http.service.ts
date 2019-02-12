import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit{

  constructor(private _http: HttpClient, 
              @Inject(SESSION_STORAGE) private storage: WebStorageService,
              private _router: Router) {}

  ngOnInit() {
  }

  /**
   * 
   * @param {string} uid - UID returned by Google for signed in account 
   */
  findUser(uid){
    return this._http.get('/api/usercheck/'+uid);
  }
  findAllUsers(){
    return this._http.get('/api/user/all')
  }
  newUser(){
    this._router.navigate(['/register/' + this.storage.get("uid")]);
  }
  createUser(userObj){
    return this._http.post('/api/user/create', userObj);
  }
  updateUser(userObj){
    return this._http.put('/api/user/' + userObj.uid, userObj);
  }
  getUser(){
    return this._http.get('/api/user/' + this.storage.get("uid"));
  }
  getParent(parentID){
    return this._http.get('/api/user/'+ parentID);
  }
  getStudent(studID){
    return this._http.get('/api/student/'+ studID + '/' + this.storage.get('uid'));
  }
  getStudentOnly(studID){
    return this._http.get('/api/student/'+studID)
  }
  addStudent(studObj){
    return this._http.post('/api/user/'+ this.storage.get('uid') +'/addstudent', studObj);
  }
  createAllergy(studID, allergyObj){
    return this._http.post('/api/allergy/'+ this.storage.get('uid')+ '/' + studID + '/create', allergyObj)
  }
  updateStudent(uid, studObj){
    return this._http.post('/api/student/'+uid+'/updatestudent', studObj)
  }
  updateStudentOnly(studID, studObj){
    return this._http.put('/api/student/'+studID+'/updatestudent', studObj)
  }
  createClass(classObj){
    return this._http.post('/api/class', classObj)
  }
  getAllClass(){
    return this._http.get('/api/class')
  }
  getClass(classID){
    return this._http.get('/api/class/'+classID)
  }
  addStudentToClass(studObj, classID){
    return this._http.post('/api/class/'+classID, studObj)
  }
  findStudentByFirstName(f_name){
    return this._http.get('/api/student/firstname/'+f_name)
  }
  findStudentByLastName(l_name){
    return this._http.get('/api/student/lastname/'+l_name)
  }
  getAllStudents(){
    return this._http.get('/api/student/all')
  }
  acceptStudent(studObj, classID){
    return this._http.post('/api/admin/class/'+classID, studObj)
  }
  unenrollStudent(studObj, classID){
    return this._http.post('/api/admin/class/'+classID+'/unenroll', studObj)
  }
  deleteClass(classID){
    return this._http.get('/api/admin/class/'+classID+'/delete')
  }
  uploadFrontPic(upfile){
    const pic = new FormData();
    pic.append('frontPicture', upfile)
    return this._http.post('/api/admin/frontpicture', pic)
  }
  getFrontPics(){
    return this._http.get('/api/admin/frontpicture')
  }
  uploadGalleryPic(upfile){
    const pic = new FormData();
    pic.append('galleryPicture', upfile)
    return this._http.post('/api/admin/gallerypicture', pic)
  }
  getGalleryPics(){
    return this._http.get('/api/admin/gallerypicture')
  }
  deletePic(id){
    return this._http.delete('/api/admin/picture/'+id)
  }
  createTuition(tuitObj){
    return this._http.post('/api/admin/tuition', tuitObj)
  }
  getAllTuition(){
    return this._http.get('/api/admin/tuition')
  }
  deleteTuit(id){
    return this._http.delete('/api/admin/tuition/'+id)
  }

};