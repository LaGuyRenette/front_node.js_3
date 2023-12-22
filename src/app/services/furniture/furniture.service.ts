import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(
    private http: HttpClient,
    ) { }

    getById(furnitureId: string): Observable<any> {
      return this.http.get(`${environment.API}furniture/${furnitureId}`);
    }

    all(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.API}furniture`);
    }
    
    filterByCategory(category: string): Observable<any> {
    return this.http.get(`${environment.API}furniture/${category}`);
    }
    
    filterByMaterials(materials: string[]): Observable<any> {
    const queryString = materials.join("&");
    return this.http.get(`${environment.API}furniture?${queryString}`);
    }
    
    post(newFurniture: FormGroup): Observable<any> {
    return this.http.post(`${environment.API}furniture`, newFurniture);
    }
    
    put(furnitureId: string, data: FormGroup): Observable<any> {
    return this.http.put(`${environment.API}furniture/${furnitureId}`, data);
    }
    
    delete(furnitureId: string): Observable<any> {
    return this.http.delete(`${environment.API}furniture/${furnitureId}`);
    }
}