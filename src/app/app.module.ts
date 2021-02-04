import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { SuperAdminComponent } from './admin/super-admin.component';
import {UsersListComponent} from './admin/Users-list-component';
import { NavBarComponent } from '../app/admin/nav/nav-bar.component'
import {ToastrServiceClient} from '../app/common/toastr.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {appRoutes} from '../routes'
import { RouterModule } from '@angular/router';
import {AddUserComponent} from './admin/add-user.component'
import {Error404Component} from './errors/404.component'
import {LoginModule} from './login/login.module'
import {AuthService} from './login/auth.service'
import {ProfileComponent} from './admin/profile.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {collapsibleWell} from './common/collapsible-well.component'
import {UpdateUserComponent} from './admin/update-user.component'
import {HrModule} from './Hr/hr.module'
import { AccountModule } from './Accountant/accountant.module';
import { EmployeeModule } from './employee/employee.module';



@NgModule({
  declarations: [
    SuperAdminComponent,
    UsersListComponent,
    NavBarComponent,
    AddUserComponent,
    Error404Component,
    ProfileComponent,
    collapsibleWell,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    HttpClientModule,
    HrModule,
    AccountModule,
    EmployeeModule

  ],
  providers: [
    ToastrServiceClient,
    AuthService,
    {provide: 'canDeactivateCreateUser',
     useValue: checkDirtyState
    },
     {provide: 'canDeactivateProfileUpdate',
     useValue: checkDirtyState2
    },
    {provide: 'canDeactivateUserUpdate',
     useValue: checkDirtyState3
    }
  ],
  bootstrap: [SuperAdminComponent]
})
export class AppModule { }

export function checkDirtyState(component:AddUserComponent){
  if(component.isDirty)
  return window.confirm('you have not added this User, do you really want to cancel?')

  return true
}

export function checkDirtyState2(component:ProfileComponent){
  if(component.isDirty)
  return window.confirm('you have not saved your updates, do you really want to cancel?')

  return true
}
export function checkDirtyState3(component:ProfileComponent){
  if(component.isDirty)
  return window.confirm('you have not updated this user, do you really want to cancel?')

  return true
}