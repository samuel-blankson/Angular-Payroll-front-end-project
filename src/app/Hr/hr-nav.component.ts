import {Component } from "@angular/core";
import { Router } from "@angular/router";
import { from } from "rxjs";
import { AuthService } from '../login/auth.service';

@Component({
    selector: 'hr-nav',
    templateUrl: './hr-nav.component.html',
    styles:[`
    .nav.navbar-nav {
        font-size: 15px;
    }

    @media (max-width: 1200px){
        #searchForm{
            display: none
        }
    }
    li > a.active {color: #F97924}
    
    `]
})

export class HrNavBarComponent{
    constructor(public auth:AuthService,private router:Router){}

    logOut(){
        this.auth.logOut()
        .subscribe(() => {
            this.router.navigate(['/login'])
        })
    }
}