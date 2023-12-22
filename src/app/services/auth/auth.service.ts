import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedEmitter: EventEmitter<boolean> = new EventEmitter();
  
  constructor(
    private http: HttpClient,
  ) { }
  
  login(credentials: FormGroup): Observable<any> {
    return this.http.post(`${environment.API}login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.get(`${environment.API}logout`);
  }

  me(): Observable<any> {
    return this.http.get(`${environment.API}me`)
      .pipe(
        tap(res => this.isLoggedEmitter.emit(res))
      );
  }
}