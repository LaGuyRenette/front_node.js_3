import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { FurnitureService } from 'src/app/services/furniture/furniture.service';

interface FurnitureElement {
  name: string,
  category: string,
  quantity: number,
  price: number,
  date: string;
}

@Component({
  selector: 'app-detail-material',
  templateUrl: './detail-material.component.html',
  styleUrls: ['./detail-material.component.scss'],
})
export class DetailMaterialComponent {
  detailMaterial: object;
  furniture: BehaviorSubject<FurnitureElement[]> = new BehaviorSubject([]);
  $furniture: Observable<FurnitureElement[]> = this.furniture.asObservable();

  constructor(
    private furnitureService: FurnitureService,
    private router: Router,
  ) {

    if (this.router.getCurrentNavigation().extras.state) {
      this.detailMaterial = this.router.getCurrentNavigation().extras.state['data'];
      console.log(this.detailMaterial)
      for (const id of this.detailMaterial["furnitureIds"]) {
        this.furnitureService.getById(id).subscribe(res => {
          const date = new Date(res["furniture"]["date"]);
          this.furniture.next([...this.furniture.value, {
            name: res["furniture"]["name"],
            category: res["furniture"]["category"],
            quantity: res["furniture"]["quantity"],
            price: res["furniture"]["price"],
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() % 100}`,
          }]);
        });
      };
    } else {
      this.router.navigate(['/material']);
    }
  }
  
  displayedColumns: string[] = [
    'name',
    'category',
    'quantity',
    'price',
    'date',
  ];
}