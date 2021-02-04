import {Component,OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { DataService } from '../common/Data-service.service'
import {IEmployeeAdd} from '../login/user.model'

@Component({
    templateUrl: './update-employee.component.html',
    styles: [`
  em {float:right; color: #E05c65; padding-left: 10px;}
  .error input, .error select{background-color: #E3C3C5;}
  .error :: -webkit-input-placeholder {color: #999;}
  .error :: -moz-placeholder {color: #999;}
  .error : -moz-placeholder {color: #999;}
  .error : ms-input-placeholder {color: #999;}
  `]
})

export class UpdateEmployeeComponent implements OnInit{
    isDirty:boolean = true

    updateUserForm: FormGroup
    employeeId: FormControl
    firstName: FormControl
    lastName: FormControl
    userEmail: FormControl
    password: FormControl
    position: FormControl


     ngOnInit(){
        this. employeeId = new FormControl('',Validators.required)
        this.firstName = new FormControl('',Validators.required)
        this.lastName = new FormControl('',Validators.required)
        this.userEmail = new FormControl('',Validators.required)
        this.password = new FormControl('',Validators.required)
        this.position = new FormControl('',Validators.required)

        this.updateUserForm = new FormGroup({
    employeeId: this.employeeId,
    firstName: this.firstName,
    lastName: this.lastName,
    userEmail: this.userEmail,
    password: this.password,
    position: this.position

        })
    }

    constructor(private router:Router,private dataService:DataService){}

     updateUser(formValues){
        let user: IEmployeeAdd = {
            employeeId: formValues.employeeId,
            firstName: formValues.firstName,
            lastName: formValues.secondName,
            userEmail: formValues.email,
            password: formValues.password,
            position: formValues.position,
            role: 'employee'
        }
         this.dataService.updateUser(user).subscribe(()=>{
        this.isDirty = false
        this.router.navigate(['/hrPage'])
        })
    }


    cancel(){
        this.router.navigate(['/hrPage'])
    }
}