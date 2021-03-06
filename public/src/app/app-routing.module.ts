import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserClassComponent } from './user-class/user-class.component';
import { UserShowClassComponent } from './user-show-class/user-show-class.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserTuitionComponent } from './user-tuition/user-tuition.component';
import { UserScheduleComponent } from './user-schedule/user-schedule.component';
import { AdminClassComponent } from './admin-class/admin-class.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { UserStudentsComponent } from './user-students/user-students.component';
import { UserstudentshowComponent } from './userstudentshow/userstudentshow.component'
import { AdminClassShowComponent } from './admin-class-show/admin-class-show.component';
import { AdminPictureComponent } from './admin-picture/admin-picture.component';
import { AdminTuitionComponent } from './admin-tuition/admin-tuition.component';
import { UserGalleryComponent } from './user-gallery/user-gallery.component';
import { AdminStudentShowComponent } from './admin-student-show/admin-student-show.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPolicyComponent } from './admin-policy/admin-policy.component';
import { UserAboutusComponent } from './user-aboutus/user-aboutus.component';
import { UserContactusComponent } from './user-contactus/user-contactus.component';
import { UserElementaryComponent } from './user-elementary/user-elementary.component';
import { UserMiddleschoolComponent } from './user-middleschool/user-middleschool.component';
import { UserHighschoolComponent } from './user-highschool/user-highschool.component';
import {AdminUnderConstructionComponent} from './admin-under-construction/admin-under-construction.component';

const routes: Routes = [
  // ROUTES FOR USERS //
  // {path: '', component: HomeComponent},
  {path: '', component: AdminUnderConstructionComponent},
  {path: 'class', component: UserClassComponent},
  {path: 'class/example', component: UserShowClassComponent},
  {path: 'registration', component: UserRegisterComponent},
  {path: 'tuition', component: UserTuitionComponent},
  {path: 'schedule', component: UserScheduleComponent},
  {path: 'students', component: UserStudentsComponent},
  {path: 'students/:id', component: UserstudentshowComponent},
  {path: 'gallery', component: UserGalleryComponent},
  {path: 'aboutus', component: UserAboutusComponent},
  {path: 'contactus', component: UserContactusComponent},
  {path: 'elementaryclasses', component: UserElementaryComponent},
  {path: 'middleschoolclasses', component: UserMiddleschoolComponent},
  {path: 'highschoolclasses', component: UserHighschoolComponent},
  // ROUTES FOR USERS //


  // ROUTES FOR ADMIN //
  {path: 'login', component: AdminLoginComponent},
  {path: 'admin', component: AdminClassComponent},
  {path: 'admin/class/:id', component: AdminClassShowComponent},
  {path: 'admin/students', component: AdminStudentsComponent},
  {path: 'admin/students/:id', component: AdminStudentShowComponent},
  {path: 'admin/pictures', component: AdminPictureComponent},
  {path: 'admin/tuition', component: AdminTuitionComponent},
  {path: 'admin/policy', component: AdminPolicyComponent}
  // ROUTES FOR ADMIN //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
