import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {loginRoutes} from './login.route'
import {FormsModule} from '@angular/forms'
import {LoginComponent} from './login.component'
import {PageIndex} from './page-index.component'

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(loginRoutes)
    ],
    declarations:[
       LoginComponent,
       PageIndex
    ],
    providers:[

    ],
     bootstrap: [ PageIndex]
})

export class LoginModule{}