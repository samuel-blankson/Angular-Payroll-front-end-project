import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {AuthService} from './auth.service'
import {IUser} from './user.model'

@Component({
    selector:'login-page',
    templateUrl: './login.component.html',
    styles: [`
    em{float:right; color:#E05C65; padding-left:10px}
    `]
})

export class LoginComponent{
    userEmail
    password
    mouseoverLogin
    loginInvalid = false;

    constructor(private authService:AuthService, private router:Router){}

    login(formValues){
       this.authService.loginUser(formValues.userEmail, formValues.password)
       .subscribe(response => {
           
           this.router.navigate(['/users'])
        //    if(!response){
        //        this.loginInvalid = true;
        //    }else{
               
        //              this.router.navigate(['/users'])
               
                 
        //    }
       })
    }

    cancel(){
        this.router.navigate(['/login'])
    }
}