import {Component } from "@angular/core";
import { Router } from "@angular/router";
import { from } from "rxjs";
import { AuthService } from '../login/auth.service';

@Component({
    selector: 'employee-nav',
    templateUrl: './employee-nav.component.html',
    styles:[`
    .nav.navbar-nav {
        font-size: 15px;
    }

    li > a.active {color: #F97924}
    
    `]
})

export class EmployeeNavBarComponent{
    constructor(public auth:AuthService,private router:Router){}

    logOut(){
        this.auth.logOut()
        .subscribe(() => {
            this.router.navigate(['/login'])
        })
    }
}