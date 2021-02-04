
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Injectable} from '@angular/core'
import { of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { DataService } from '../common/Data-service.service'
import {IUser, IUserAdd} from './user.model'

@Injectable()
export class AuthService {
    user:IUserAdd
    currentUser: IUserAdd

     constructor(private dataService: DataService, private http:HttpClient){}

    loginUser(userEmail:string, password: string){

        let loginInfo = {useremail: userEmail, password: password}
        let options = {headers: new HttpHeaders({'content-type': 'application/json'})}

         return this.http.post('api/login',loginInfo,options)
         .pipe(tap(data => {
             this.currentUser = <IUserAdd>data['user']
         }))
         .pipe(catchError(err => {
             return of(false)
         }))
    }

   

    isAuthenticated(){
        return !!this.currentUser;
    }

    checkAuthenticationStatus(){
       return this.http.get('api/currentIdentity')
        .pipe(tap(data => {
            if(data instanceof Object){
                this.currentUser = <IUserAdd>data
            }
        }))
        .subscribe()
    }

      updateCurrentUser(firstName:string,lastName:string,userEmail:string,password:string){

        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
        this.currentUser.userEmail = userEmail
        this.currentUser.password = password

         this.dataService.updateUser(this.currentUser).subscribe()

    }

    logOut(){
        this.currentUser = undefined;
           let options = {headers: new HttpHeaders({'content-type': 'application/json'})}
           return this.http.post('/api/logout',{},options)
    }
}