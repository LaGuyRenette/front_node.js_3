import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(
    private http: HttpClient,
    ) { }
    
    all(): Observable<any> {
    return this.http.get(`${environment.API}furniture`);
    }
    
    filterByCategory(category: string): Observable<any> {
    return this.http.get(`${environment.API}furniture/${category}`);
    }
    
    filterByMaterials(materials: string[]): Observable<any> {
    const queryString = materials.join("&");
    return this.http.get(`${environment.API}/furniture?${queryString}`);
    }
    
    post(newFurniture: FormGroup): Observable<any> {
    return this.http.post(`${environment.API}/furniture`, newFurniture);
    }
    
    put(data: FormGroup): Observable<any> {
    return this.http.put(`${environment.API}/furniture`, data);
    }
    
    delete(furnitureId: string): Observable<any> {
    return this.http.delete(`${environment.API}furniture/${furnitureId}`);
    }
}
