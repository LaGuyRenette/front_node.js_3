import { Component, ViewChild } from '@angular/core';
import { MatCalendar, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { FurnitureService } from 'src/app/services/furniture/furniture.service';
import { MaterialsService } from 'src/app/services/materials/materials.service';


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
  pieChartData: object[] = [];
  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;


  viewPC: [number, number] = [700, 400];
  animationPC = true;
  colorSchemePC = "vivid";
  labelsPC = true;
  doughnut = true;

 

  constructor(
    private furnitureService: FurnitureService,
    private materialsService: MaterialsService,
  ) 
  {
      this.getFurniture();
      this.getMaterials();
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
  getMaterials(){
    this.materialsService.all().subscribe({
      next: (res: any) => {
        this.pieChartData = res.materials.map((materials: any) => {
          const name = materials.name;
          const value = materials.totalQuantity;

          return { name, value };
        })
      },
      error: (error) => console.error(error),
    })
  }

  dateClass(date: Date): MatCalendarCellCssClasses {
    const isFurnitureDate = this.selectedDate && this.selectedDate
      .some(d => d.getDate() === date.getDate() &&
                 d.getMonth() === date.getMonth() &&
                 d.getFullYear() === date.getFullYear());
  
    return isFurnitureDate ? 'special-date' : '';
  }
  percentageFormatterPC(datamaterials: any): string {

    console.log(datamaterials['totalQuantity'])
    return datamaterials['totalQuantity'] + "%";
    
  }

}
