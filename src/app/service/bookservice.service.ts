import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  baseURL: string= "http://localhost:8080/";
  constructor(private http:HttpClient) { }
  getBook(): Observable<Book> {
    return this.http.get<Book>(this.baseURL);
  }
  getBookByID(id:number): Observable<object>
  {
    return this.http.get<Book>(`${this.baseURL}books/${id}`)
  }
  addBook(Book: Object): Observable<Object>{
    return this.http.post('{$this.url}', Book);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, {responseType: 'text'})
  }
}
