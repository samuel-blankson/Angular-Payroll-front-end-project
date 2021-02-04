import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'super-admin',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class SuperAdminComponent {
  title = 'Payroll App';

  constructor(private auth:AuthService){}

  ngOnInit(){
     this.auth.checkAuthenticationStatus()
  }
}
