
import {Routes} from '@angular/router'
import { AddEmployeeComponent } from './add-employee.component'
import { EmployeesListComponent } from './employee-list.component'
import { HrProfileComponent } from './hr-profile.component'
import {HrComponent} from './hr.component'
import { UpdateEmployeeComponent } from './update-employee.component'

export const HrRoutes:Routes = [
    {path: 'hrPage', component: HrComponent,outlet:'hr'},
    {path: 'hr/employeeList', component: EmployeesListComponent,outlet:'hr' },
    {path: 'hr/addEmployee', component: AddEmployeeComponent,outlet:'hr',
    canDeactivate:['canDeactivateAddEmployee']},
    {path: 'hr/updateEmployee', component: UpdateEmployeeComponent,outlet:'hr',
    canDeactivate:['canDeactivateUpdateEmployee']},
    {path: 'hr/profileHr', component: HrProfileComponent,outlet:'hr',
    canDeactivate:['canDeactivateProfileUpdate']}
]
