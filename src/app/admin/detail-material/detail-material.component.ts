import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


export interface FurnitureElement {
  name: string;
  quantity_material: number;
  price_material: number;
  quantity_furniture: number;
  price_furniture: number;
  date: Date; 
}
//Name', 'Quantité de matière', 'Prix', 'Quantité de mobilier', 'Prix', 'Date'
const currentDate = new Date();
const FURNITURE: FurnitureElement[] = [
  { name: 'Hydrogen',quantity_material: 25, price_material: 107.9, quantity_furniture: 9,price_furniture: 300,  date: currentDate },
  { name: 'Oxygen', quantity_material: 30, price_material: 120.5, quantity_furniture: 12, price_furniture: 350, date: new Date(2023, 1, 15) },
  { name: 'Carbon', quantity_material: 40, price_material: 150.0, quantity_furniture: 8, price_furniture: 280, date: new Date(2023, 2, 20) },
  { name: 'Nitrogen', quantity_material: 22, price_material: 90.8, quantity_furniture: 15, price_furniture: 400, date: new Date(2023, 3, 8) },
  { name: 'Helium', quantity_material: 18, price_material: 80.2, quantity_furniture: 10, price_furniture: 320, date: new Date(2023, 4, 5) },

];

@Component({
  selector: 'app-detail-material',
  templateUrl: './detail-material.component.html',
  styleUrls: ['./detail-material.component.scss']
})
export class DetailMaterialComponent {
  detailMaterial: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.detailMaterial = this.router.getCurrentNavigation().extras.state["data"];
    console.log(this.detailMaterial);
    } else {
      this.router.navigate(["/material"]);
    }
    
  }

  displayedColumns: string[] = ['name', 'quantity_material', 'price_material', 'quantity_furniture', 'price_furniture', 'date'];
  dataSource = FURNITURE;

}