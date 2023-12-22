import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FurnitureService } from 'src/app/services/furniture/furniture.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent {
  detailFurniture: object;
  displayedColumns: string[] = [
    'name',
    'type',
    'quantity'
  ];

constructor(
  private router: Router,
  ){
    if (this.router.getCurrentNavigation().extras.state) {
      this.detailFurniture = this.router.getCurrentNavigation().extras.state["data"];
    }else {
      this.router.navigate(["/"]);
    }
  }
}