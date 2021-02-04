
import {Routes} from '@angular/router'
import {EmployeeComponent} from './employee.component'
import {EmployeeProfileComponent} from './employeeProfile.component'

export const EmployeeRoutes:Routes = [
    {path: 'employeePage', component: EmployeeComponent,outlet:'employee'},
    {path: 'employeePage/employeeProfile', component: EmployeeProfileComponent,outlet:'employee',
    canDeactivate:['canDeactivateProfileUpdate']}
]
