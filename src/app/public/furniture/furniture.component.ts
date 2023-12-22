import { Component } from '@angular/core';
import { FurnitureService } from 'src/app/services/furniture/furniture.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent {
constructor(
  private furnitureService: FurnitureService
  ){}
}
