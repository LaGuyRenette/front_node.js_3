import { Component } from '@angular/core';
import { FurnitureService } from 'src/app/services/furniture/furniture.service';

export interface FurnitureElement {
  name: string;
  category: string;
  price: number;
  quantity: number;
  date: Date; 
}

const currentDate = new Date();


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
  
})
export class DashboardComponent {
  displayedColumns: string[] = ['name', 'category', 'price', 'quantity', 'date'];
  dataSource: FurnitureElement[] = [];

  constructor(
    private furnitureService: FurnitureService
  ) 
  {
      this.getFurniture();
    };
  
  getFurniture() {
    this.furnitureService.all().subscribe({
      next: (res:any) => {        
        this.dataSource = res.furniture.map((furniture: any) => {
        const name = furniture.name;
        const category = furniture.category;
        const price = furniture.price;
        const quantity = furniture.quantity;
        const date = new Date(furniture.date);

        return { name, category, price, quantity, date };
      });
      },
      error: (error) => console.error('Le format des données est incorrect.'),
    });
  }
}
