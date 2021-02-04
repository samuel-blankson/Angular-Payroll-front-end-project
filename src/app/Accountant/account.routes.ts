
import {Routes} from '@angular/router'
import { AccountProfileComponent } from './account-profile.component'
import { AccountComponent } from './account.component'

export const AccountRoutes:Routes = [
    {path: 'accountPage', component: AccountComponent,outlet:'account'},
    {path: 'account/profileAccount', component: AccountProfileComponent,outlet:'account',
    canDeactivate:['canDeactivateProfileUpdate']}
]
