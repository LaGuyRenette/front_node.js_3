import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {constructor(
  private http: HttpClient,
  ) { }
  
  login(email: string, password: string): Observable<any> {
  return this.http.post(`${environment.API}login`, {email, password});
  }
  
  logout(): Observable<any> {
  return this.http.get(`${environment.API}logout`);
  }
}
