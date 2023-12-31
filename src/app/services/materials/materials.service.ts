import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  constructor(
    private http: HttpClient,
    ) { }
    
    all(): Observable<any> {
    return this.http.get(`${environment.API}materials`);
    }
}
