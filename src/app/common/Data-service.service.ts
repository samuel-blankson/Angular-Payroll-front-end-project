import {Observable, Subject, throwError} from 'rxjs'
import {Injectable} from '@angular/core'
import {IUser, IUserAdd} from '../login/user.model'
import { HttpClient ,HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService{
      private payrollUrl = 'api/products/products.json';

    constructor(private http: HttpClient){}


    getUsers():Observable<IUser[]>{
      return this.http.get<IUser[]>(this.payrollUrl).pipe(
        tap(data => console.log('All: '+ JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    getEmployees():Observable<IUser[]>{
      return this.http.get<IUser[]>(this.payrollUrl).pipe(
        tap(data => console.log('All: '+ JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    saveUser(user){
        let options = {headers: new HttpHeaders({'content-Type':'application/json'})}
       return this.http.post<IUserAdd>(this.payrollUrl,user,options)
        .pipe(catchError(this.handleError))
    }

     saveEmployee(employee){
          let options = {headers: new HttpHeaders({'content-Type':'application/json'})}
       return this.http.post<IUserAdd>(this.payrollUrl,employee,options)
        .pipe(catchError(this.handleError))
    }

    updateUser(user){
           let options = {headers: new HttpHeaders({'content-Type':'application/json'})}
       return this.http.post<IUserAdd>(this.payrollUrl,user,options)
        .pipe(catchError(this.handleError))
    }

    updateEmployee(employee){
           let options = {headers: new HttpHeaders({'content-Type':'application/json'})}
       return this.http.post<IUserAdd>(this.payrollUrl,employee,options)
        .pipe(catchError(this.handleError))
    }

    deleteUser(user:IUser){
           let options = {headers: new HttpHeaders({'content-Type':'application/json'})}
       return this.http.post<IUserAdd>(this.payrollUrl,user.employeeId,options)
        .pipe(catchError(this.handleError))
    }

    deleteEmployee(employee:IUser){
           let options = {headers: new HttpHeaders({'content-Type':'application/json'})}
       return this.http.post<IUserAdd>(this.payrollUrl,employee.employeeId,options)
        .pipe(catchError(this.handleError))
    }


    
     private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if(err.error instanceof HttpErrorResponse){
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}



