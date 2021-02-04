import { toBase64String } from '@angular/compiler/src/output/source_map';
import{Component, OnInit,OnChanges} from '@angular/core'
import {ToastrServiceClient} from '../common/toastr.service'
import {ActivatedRoute} from '@angular/router'
import { DataService } from '../common/Data-service.service';
import { IEmployee } from '../login/user.model';

@Component({
    templateUrl: './employee-list.component.html',
    styles:[`
    button.active {color: #F97924}
    `]
})

export class EmployeesListComponent implements OnChanges,OnInit{
  errorMessage: string;

    title = 'Employees';

    filterBy: string = 'all';

    checkUsers:any[]

    employees:IEmployee[] = [];

    visibleEmployees:IEmployee[] = [];

  private _listFilter: string ;
  public get listFilter(): string {
    return this._listFilter;
}
  public set listFilter(value: string) {
    this._listFilter = value;
    this.visibleEmployees = this.listFilter ? this.performFilter(this.listFilter) : this.employees.slice(0);
 }

   constructor(private toastr:ToastrServiceClient,private route:ActivatedRoute,private dataService:DataService){
     
   }

   ngOnChanges(){
  
    if(this.employees){
      this.filterUsers(this.filterBy)
    }
   }

     filterUsers(filter){
        if(filter ==='all'){
            this.visibleEmployees = this.employees.slice(0);
        }else{
            this.visibleEmployees= this.employees
            .filter(employee => {
                return employee
                .position
                    .toLocaleLowerCase() === filter});
        }
    }

    onCheck(value:any){
      this.checkUsers.push(value);
    }

    deleteUser(){
     this.checkUsers.forEach(user => {
        this.dataService.deleteEmployee(user)
      });
    }

     performFilter(filterBy: string): any[]{
    filterBy = filterBy.toLocaleLowerCase();

    return this.employees.filter((employee: any) =>
           employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe({
      next: employees => {this.employees = employees;
        this.visibleEmployees = this.employees;
      },
      error: error => this.errorMessage = error
      
    }); 
    this.visibleEmployees = this.employees;
  }

}