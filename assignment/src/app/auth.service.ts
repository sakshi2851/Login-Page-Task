import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from "./models/user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8081';
constructor(private http: HttpClient) {}

login(user: {email:string,password:string}) {
    return this.http.post(`${this.baseUrl}/login/auth`,user);
}

register(user: User): Observable<any> {
  return this.http.post(`${this.baseUrl}/register/authregister`, user);
}

verifyUserCredentials(loginInfo:{email:string,password:string}):Observable<any>{
  return this.http.post(`${this.baseUrl}/api/auth`,loginInfo);
}
UserInfo(RegisterInfo:{firstName:string,lastName:string,email:string,password:string,mobileNumber:string,userType:string}):Observable<any>{
  return this.http.post(`${this.baseUrl}/api/authinfo`,RegisterInfo);
}
createSheet(user:{firstName:string,lastName:string,email:string,password:string,mobileNumber:string,userType:string}):Observable<any>{
  return this.http.post(`${this.baseUrl}/api/authinfo`,user);
}
excelupload(user:{firstName:string,lastName:string,email:string,password:string,mobileNumber:string,userType:string}):Observable<any>{
  return this.http.post(`${this.baseUrl}/api/upload-customers-data`,user);
}
// createSheet(user: User): Observable<any> {
//   return this.http.post(`${this.baseUrl}/api/saveinfo`, user);
//}

}