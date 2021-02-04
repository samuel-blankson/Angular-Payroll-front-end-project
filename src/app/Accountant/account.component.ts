import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'account-page',
  template: `
  <account-nav></account-nav>
  <router-outlet name="account"></router-outlet>
  `
})
export class AccountComponent {
  title = 'Payroll App';

  constructor(private auth:AuthService){}

  ngOnInit(){
     this.auth.checkAuthenticationStatus()
  }
}
