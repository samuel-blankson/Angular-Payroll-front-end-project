import {Component,OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {IUserAdd} from '../login/user.model'
import {DataService} from '../common/Data-service.service'
import {AuthService} from '../login/auth.service'

@Component({
    templateUrl: './add-user.component.html',
    styles: [`
  em {float:right; color: #E05c65; padding-left: 10px;}
  .error input, .error select{background-color: #E3C3C5;}
  .error :: -webkit-input-placeholder {color: #999;}
  .error :: -moz-placeholder {color: #999;}
  .error : -moz-placeholder {color: #999;}
  .error : ms-input-placeholder {color: #999;}
  `]
})

export class AddUserComponent implements OnInit{

    constructor(public auth:AuthService,private router:Router,private dataService:DataService){}
    isDirty:boolean = true

    addUserForm: FormGroup
    employeeId: FormControl
    firstName: FormControl
    lastName: FormControl
    userEmail: FormControl
    password: FormControl
    position: FormControl
    role: FormControl


     ngOnInit(){
        this. employeeId = new FormControl('',Validators.required)
        this.firstName = new FormControl('',Validators.required)
        this.lastName = new FormControl('',Validators.required)
        this.userEmail = new FormControl('',Validators.required)
        this.password = new FormControl('',Validators.required)
        this.position = new FormControl('',Validators.required)
         this.role = new FormControl('',Validators.required)

        this.addUserForm = new FormGroup({
    employeeId: this.employeeId,
    firstName: this.firstName,
    lastName: this.lastName,
    userEmail: this.userEmail,
    password: this.password,
    position: this.position,
    role: this.role

        })
    }

    

     addUser(formValues){
        let user: IUserAdd = {
            employeeId: formValues.employeeId,
            firstName: formValues.firstName,
            lastName: formValues.secondName,
            userEmail: formValues.email,
            password: formValues.password,
            position: formValues.position,
            role: formValues.role
        }
        this.dataService.saveUser(user).subscribe(()=>{
        this.isDirty = false
        this.router.navigate(['/users'])
        })
       
    }


    cancel(){
        this.router.navigate(['/users'])
    }
}