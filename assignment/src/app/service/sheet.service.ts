import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sheet } from '../models/sheet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SheetService {
  constructor(private http: HttpClient) {}

  createSheet(
    id:string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    mobileNumber:string,
    userType:string,
  ): Observable<Sheet> {
    return this.http.post<Sheet>(`${environment.CONNECTION_URL}`, {
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      userType
    });
  }

  listSheet() {
    return this.http.get(`${environment.CONNECTION_URL}`);
  }

  deleteSheet(id: number) {
    return this.http.delete(`${environment.CONNECTION_URL}/${id}`);
  }

  getSheetDataById(id: number) {
    return this.http.get(`${environment.CONNECTION_URL}/${id}`);
  }
  

  updateSheet(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    mobileNumber:string,
    userType:string,
  ): Observable<Sheet> {
    return this.http.put<Sheet>(`${environment.CONNECTION_URL}/${id}`, {
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      userType
    });
  }
}