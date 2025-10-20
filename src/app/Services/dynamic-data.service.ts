import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {

  private baseUrl = "http://localhost:2000/products"; // أو endpoint بتاعك

  constructor(private Httpclient : HttpClient) { 
  }

getAllPrds():Observable<any[]>{
  return this.Httpclient.get<any[]>(this.baseUrl);
}

getPrdById(ID:number):Observable<any>{
  return this.Httpclient.get(`${this.baseUrl}/${ID}`);
}

  deletePrdById(PID: number): Observable<any> {
    return this.Httpclient.delete(`${this.baseUrl}/${PID}`);
  }

}
