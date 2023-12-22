import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {constructor(
  private http: HttpClient,
  ) { }
  
  login(credentials: FormGroup): Observable<any> {
    return this.http.post(`${environment.API}login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.get(`${environment.API}logout`);
  }
  isLoggedEmitter(){
  }

  
  me(): Observable<any> {
    return this.http.get(`${environment.API}me`);
  }
}
