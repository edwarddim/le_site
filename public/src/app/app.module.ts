import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserClassComponent } from './user-class/user-class.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserTuitionComponent } from './user-tuition/user-tuition.component';
import { UserScheduleComponent } from './user-schedule/user-schedule.component';
import { AdminClassComponent } from './admin-class/admin-class.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { HomeComponent } from './home/home.component';
import { UserShowClassComponent } from './user-show-class/user-show-class.component';
import { UserStudentsComponent } from './user-students/user-students.component';
import { UserstudentshowComponent } from './userstudentshow/userstudentshow.component';
import { AdminClassShowComponent } from './admin-class-show/admin-class-show.component';
import { AdminPictureComponent } from './admin-picture/admin-picture.component';
import { AdminTuitionComponent } from './admin-tuition/admin-tuition.component';
import { UserGalleryComponent } from './user-gallery/user-gallery.component';
import { AdminStudentShowComponent } from './admin-student-show/admin-student-show.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPolicyComponent } from './admin-policy/admin-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    UserClassComponent,
    UserRegisterComponent,
    UserTuitionComponent,
    UserScheduleComponent,
    AdminClassComponent,
    AdminStudentsComponent,
    HomeComponent,
    UserShowClassComponent,
    UserStudentsComponent,
    UserstudentshowComponent,
    AdminClassShowComponent,
    AdminPictureComponent,
    AdminTuitionComponent,
    UserGalleryComponent,
    AdminStudentShowComponent,
    AdminLoginComponent,
    AdminPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [
    HttpService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
