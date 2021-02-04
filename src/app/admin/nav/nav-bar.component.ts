import {Component } from "@angular/core";
import { Router } from "@angular/router";
import { from } from "rxjs";
import {AuthService} from '../../login/auth.service'

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles:[`
    .nav.navbar-nav {
        font-size: 15px;
    }

    #searchForm{
        margin-right: 100px;
    }

   
    li > a.active {color: #F97924}
    
    `]
})

export class NavBarComponent{
    constructor(public auth:AuthService,private router:Router){}

    logOut(){
        this.auth.logOut()
        .subscribe(() => {
            this.router.navigate(['/login'])
        })
    }
}