import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cmt } from '../model/Cmt';

@Injectable({
  providedIn: 'root'
})
export class CmtseviceService {
 baseURL: string = "http://localhost:8080/cmts"
 constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getCmt(): Observable<Cmt>
  {
    return this.http.get<Cmt>(this.baseURL);
  }
  getCmtByID(id: number): Observable<object>
  {
    return this.http.get<Cmt>(this.baseURL + "/" + id, this.httpOptions);
  }
  addCmt(cmt:any): Observable<Cmt> {
    return this.http.post<Cmt>(`${this.baseURL}/`, JSON.stringify(cmt), this.httpOptions);
  }
}
