import { toBase64String } from '@angular/compiler/src/output/source_map';
import{Component, OnInit,OnChanges} from '@angular/core'
import {ToastrServiceClient} from '../common/toastr.service'
import {ActivatedRoute} from '@angular/router'
import { DataService } from '../common/Data-service.service';
import { IUser } from '../login/user.model';
import {AuthService} from '../login/auth.service'

@Component({
    templateUrl: './user-list.component.html',
    styles:[`
    button.active {color: #F97924}
    `]
})

export class UsersListComponent implements OnChanges,OnInit{
  errorMessage: string;

    title = 'Users';

    filterBy: string = 'all';

    filterByPosition: string = 'all';

    checkUsers:any[]

    users:IUser[] = [];

    visibleUsers:IUser[] = [];

  private _listFilter: string ;
  public get listFilter(): string {
    return this._listFilter;
}
  public set listFilter(value: string) {
    this._listFilter = value;
    this.visibleUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users.slice(0);
 }

   constructor(public auth:AuthService,private toastr:ToastrServiceClient,private route:ActivatedRoute,private dataService:DataService){
     
   }

   ngOnChanges(){
  
    if(this.users){
      this.filterUsers(this.filterBy)
    }
     if(this.users){
      this.filterUsersPosition(this.filterByPosition)
    }
   }

     filterUsers(filter){
        if(filter ==='all'){
            this.visibleUsers = this.users.slice(0);
        }else{
            this.visibleUsers = this.users
            .filter(user => {
                return user
                .role
                    .toLocaleLowerCase() === filter});
        }
    }

     filterUsersPosition(filter){
        if(filter ==='all'){
            this.visibleUsers = this.users.slice(0);
        }else{
            this.visibleUsers = this.users
            .filter(user => {
                return user
                .position
                    .toLocaleLowerCase() === filter});
        }
    }

    onCheck(value:any){
      this.checkUsers.push(value);
    }

    deleteUser(){
     this.checkUsers.forEach(user => {
        this.dataService.deleteUser(user)
      });
    }

     performFilter(filterBy: string): any[]{
    filterBy = filterBy.toLocaleLowerCase();

    return this.users.filter((user: any) =>
           user.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe({
      next: users => {this.users = users;
        this.visibleUsers = this.users;
      },
      error: error => this.errorMessage = error
      
    }); 
    this.visibleUsers = this.users;
  }

}