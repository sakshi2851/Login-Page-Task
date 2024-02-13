import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser() {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:8081/login/auth';

  constructor(private http: HttpClient) {}

  save(login: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, login);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/findAll`);
  }

  update(login: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, login);
  }

  delete(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete`);
  }

  login(login: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth`, login, { observe: 'response' });
  }
}


  