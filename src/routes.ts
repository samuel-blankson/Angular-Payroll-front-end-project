import {Routes} from '@angular/router'
import { Error404Component } from './app/errors/404.component';
import { AddUserComponent } from './app/admin/add-user.component';
import { UsersListComponent } from "./app/admin/Users-list-component";
import {ProfileComponent}  from './app/admin/profile.component'
import {UpdateUserComponent} from './app/admin/update-user.component'


export const appRoutes:Routes = [
    {path: 'users', component: UsersListComponent},
    {path: 'users/new', component: AddUserComponent,
    canDeactivate:['canDeactivateCreateUser']},
     {path: 'users/update', component:UpdateUserComponent,
    canDeactivate:['canDeactivateUserUpdate']},
     {path: 'users/profile', component: ProfileComponent,
    canDeactivate:['canDeactivateProfileUpdate']},
    {path: '404', component: Error404Component},
     {path: 'login', loadChildren: './login/login.module#LoginModule'},
     {path: 'hrPage', loadChildren: './Hr/hr.module#HrModule'},
      {path: 'accountPage', loadChildren: './Accountant/accountant.module#AccountModule'},
         {path: 'employeePage', loadChildren: './employee/employee.module#EmployeeModule'},
     {path:'', redirectTo: '/login', pathMatch: 'full'}

]