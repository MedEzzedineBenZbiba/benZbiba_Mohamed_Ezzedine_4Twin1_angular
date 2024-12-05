import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { user } from 'src/app/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  apiString: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient ) { }

  getAllUsers() : Observable<user[]> {
     return this.http.get<user[]>(this.apiString);
  }

  deleteUser(user : user):Observable<user> {
    let apiUrl : string =  this.apiString + '/' + user.id;
    return this.http.delete<user>(apiUrl);
  }


  addUser(user : user): Observable<user>{
    return this.http.post<user>(this.apiString, user);
  }

  getUserById(id : string | null) : Observable<user>{
    if (id === null) this.getAllUsers;
    let apiUrl : string = this.apiString + "/" + id; 
    return this.http.get<user>(apiUrl);
  }

  updateUser(id : string , user :user): Observable<user>{
    return this.http.put<user>(this.apiString+"/"+id, user);

  }
}
