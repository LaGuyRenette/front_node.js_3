import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FurnitureService } from 'src/app/services/furniture/furniture.service';

@Component({
  selector: 'app-list-furniture',
  templateUrl: './list-furniture.component.html',
  styleUrls: ['./list-furniture.component.scss']
})
export class ListFurnitureComponent {
  selectedCategory: string = '';
  furnitureList: any[] = [];
  cupboardFurnitureList: any[] = [];
  shelfFurnitureList: any[] = [];
  

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private furnitureService: FurnitureService,
    ){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'];
    });
    this.getFurniture()
  }

  goToFurniture(){
    this.router.navigate(['/furniture'])
  }
  getFurniture() {
    this.furnitureList = [];
    console.log(this.selectedCategory)
    this.furnitureService.filterByCategory(this.selectedCategory).subscribe({
      next: (res) => {this.furnitureList = res.furniture;
      console.log(res.furniture.category);},
      error: (error) => console.error('Le format des données est incorrect.')
    })
  }
  }