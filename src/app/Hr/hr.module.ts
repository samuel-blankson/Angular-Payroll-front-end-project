import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HrComponent} from './hr.component'
import { EmployeesListComponent } from './employee-list.component'
import { HrRoutes } from './hr.routes'
import {AddEmployeeComponent} from './add-employee.component'
import { UpdateEmployeeComponent } from './update-employee.component'
import { HrProfileComponent } from './hr-profile.component'
import { HrNavBarComponent } from './hr-nav.component'
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(HrRoutes)
    ],
    declarations:[
      HrComponent,
      EmployeesListComponent,
      AddEmployeeComponent,
      UpdateEmployeeComponent,
      HrProfileComponent,
      HrNavBarComponent
    ],
    providers:[
          {provide: 'canDeactivateAddEmployee',
     useValue: checkDirtyState
    },
     {provide: 'canDeactivateProfileUpdate',
     useValue: checkDirtyState2
    },
    {provide: 'canDeactivateUpdateEmployee',
     useValue: checkDirtyState3
    }
    ],
     bootstrap: [HrComponent]
})

export class HrModule{}
export function checkDirtyState(component:AddEmployeeComponent){
  if(component.isDirty)
  return window.confirm('you have not added this Employee, do you really want to cancel?')

  return true
}

export function checkDirtyState2(component:HrProfileComponent){
  if(component.isDirty)
  return window.confirm('you have not saved your updates, do you really want to cancel?')

  return true
}
export function checkDirtyState3(component:UpdateEmployeeComponent){
  if(component.isDirty)
  return window.confirm('you have not updated this employee, do you really want to cancel?')

  return true
}