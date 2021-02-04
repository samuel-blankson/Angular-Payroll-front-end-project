import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {AuthService} from '../login/auth.service'


@Component({
  templateUrl: './employeeProfile.component.html',
  styles: [`
  em {float:right; color: #E05c65; padding-left: 10px;}
  .error input {background-color: #E3C3C5;}
  .error :: -webkit-input-placeholder {color: #999;}
  .error :: -moz-placeholder {color: #999;}
  .error : -moz-placeholder {color: #999;}
  .error : ms-input-placeholder {color: #999;}
  `]
})
export class EmployeeProfileComponent implements OnInit  {
      isDirty:boolean = true

  profileForm: FormGroup
  private firstName: FormControl
  private lastName: FormControl
  private userEmail: FormControl
  private password: FormControl

    constructor(private authService:AuthService,private router:Router){}

     ngOnInit(){
    this. firstName = new FormControl(this.authService.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z]*')])
     this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required,Validators.pattern('[a-zA-Z]*')])
     this. userEmail = new FormControl(this.authService.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z]*')])
     this. password = new FormControl(this.authService.currentUser.firstName,Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      userEmail: this.userEmail,
      password: this.password
    })
  }


  saveProfile(formValues){
    if(this.profileForm.valid){
      
    this.authService.updateCurrentUser(formValues.firstName,formValues.lastName,formValues.userEmail,formValues.password)
    this.isDirty = false
     this.router.navigate(['/employeePage'])
    }
  }

    cancel(){
        this.router.navigate(['/employeePage'])
    } 

     validateFirstName(){
    return  this.firstName.valid ||
      this.firstName.untouched
  }

  validateLastName(){
    return  this.lastName.valid ||
      this.lastName.untouched
  }

   validateUserEmail(){
    return  this.userEmail.valid ||
      this.userEmail.untouched
  }

  validatePassword(){
    return  this.password.valid ||
      this.password.untouched
  }
}