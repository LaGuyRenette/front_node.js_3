import { Component, ViewChild } from '@angular/core';
import { MatCalendar, MatCalendarCellCssClasses } from '@angular/material/datepicker';
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
  selectedDate: Date[] = [];

  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;

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

        this.selectedDate.push(date);

        return { name, category, price, quantity, date };
      });
      if (this.calendar && this.selectedDate.length > 0) {
        this.calendar.activeDate = this.selectedDate[0];
        this.calendar.updateTodaysDate();
      }
    },
      error: (error) => console.error('Le format des données est incorrect.'),
    });
  }

  dateClass(date: Date): MatCalendarCellCssClasses {
    const isFurnitureDate = this.selectedDate && this.selectedDate
      .some(d => d.getDate() === date.getDate() &&
                 d.getMonth() === date.getMonth() &&
                 d.getFullYear() === date.getFullYear());
  
    return isFurnitureDate ? 'special-date' : '';
  }
//   datamaterials = this.furnitureService.filterByMaterials;
//    viewPC: [number, number] = [700, 400];
//    animationPC = true;
//     colorSchemePC = "vivid";
//   labelsPC = true;
//    doughnut = true;

//    percentageFormatterPC(data: any): string {
//     return data.value + "%";
//   }
}
