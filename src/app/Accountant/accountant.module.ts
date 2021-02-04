import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AccountRoutes } from './account.routes'
import { AccountProfileComponent } from './account-profile.component'
import { AccountComponent } from './account.component'
import { AccountNavBarComponent } from './account-nav.component'


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(AccountRoutes)
    ],
    declarations:[
       AccountProfileComponent,
       AccountComponent,
       AccountNavBarComponent
    ],
    providers:[
        {provide: 'canDeactivateProfileUpdate',
     useValue: checkDirtyState
    }

    ],
     bootstrap: [AccountComponent ]
})

export class AccountModule{}

export function checkDirtyState(component:AccountProfileComponent){
  if(component.isDirty)
  return window.confirm('you have not saved your updates, do you really want to cancel?')

  return true
}