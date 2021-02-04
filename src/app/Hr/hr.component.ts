import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'super-admin',
  template: `
  <hr-nav></hr-nav>
  <router-outlet name="hr"></router-outlet>
  `
})
export class HrComponent {
  title = 'Payroll App';

  constructor(private auth:AuthService){}

  ngOnInit(){
     this.auth.checkAuthenticationStatus()
  }
}
