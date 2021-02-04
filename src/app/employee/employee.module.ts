import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {EmployeeComponent} from './employee.component'
import { EmployeeProfileComponent } from './employeeProfile.component'
import { EmployeeRoutes } from './employee.routes'
import { EmployeeNavBarComponent } from './employee-nav.component'



@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(EmployeeRoutes)
    ],
    declarations:[
     EmployeeComponent,
     EmployeeNavBarComponent,
     EmployeeProfileComponent
    ],
    providers:[
        {provide: 'canDeactivateProfileUpdate',
     useValue: checkDirtyState
    }

    ],
     bootstrap: [EmployeeComponent]
})

export class EmployeeModule{}

export function checkDirtyState(component:EmployeeProfileComponent){
  if(component.isDirty)
  return window.confirm('you have not saved your updates, do you really want to cancel?')

  return true
}