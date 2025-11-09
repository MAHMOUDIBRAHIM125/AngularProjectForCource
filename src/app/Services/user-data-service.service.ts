import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  private baseUrl = "http://localhost:2000/users"; // أو endpoint بتاعك

  constructor(private Httpclient : HttpClient) { 
  }

AddUser(user:any):Observable<any>{
  return this.Httpclient.post(this.baseUrl, user);
}

GetUsers(): Observable<any[]> {
  return this.Httpclient.get<any[]>(this.baseUrl);
}



}
