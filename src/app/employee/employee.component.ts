import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'employee-page',
  template: `
  <employee-nav></employee-nav>
  <router-outlet name="employee"></router-outlet>
  `
})
export class EmployeeComponent {
  title = 'Payroll App';

  constructor(private auth:AuthService){}

  ngOnInit(){
     this.auth.checkAuthenticationStatus()
  }
}
