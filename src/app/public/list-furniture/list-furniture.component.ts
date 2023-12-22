import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FurnitureService } from 'src/app/services/furniture/furniture.service';

@Component({
  selector: 'app-list-furniture',
  templateUrl: './list-furniture.component.html',
  styleUrls: ['./list-furniture.component.scss'],
})
export class ListFurnitureComponent {
  isLogged: boolean = false;
  selectedCategory: string = '';
  furnitureList: any[] = [];
  shelfFurnitureList: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private furnitureService: FurnitureService
  ) {
    this.authService.me().subscribe(res => this.isLogged = res);
    this.route.queryParams.subscribe((params) => {
      this.selectedCategory = params['category'];
      this.getFurniture();
      
    });
  }

  deleteFurniture(furnitureId: string) {
    this.furnitureService.delete(furnitureId).subscribe(res => {
      if (res["message"] === "furniture deleted") {
        this.furnitureList = this.furnitureList.filter(furniture => furniture["id"] !== furnitureId);
      }
    });
  }

  editFurniture(furniture: object) {
    const navExtra: NavigationExtras = {
      state: {
        data: furniture,
      }
    }
    this.router.navigate(["/createFurniture"], navExtra);
  }

  goToFurniture(furniture: object) {
    const navExtra: NavigationExtras = {
      state: {
        data: furniture
      }
    }
    this.router.navigate(['/furniture'], navExtra);
  }
  getFurniture() {
    this.furnitureList = [];
    this.furnitureService.filterByCategory(this.selectedCategory).subscribe({
      next: (res) => {
        this.furnitureList = res.furniture;
      },
      error: (error) => console.error('Le format des donnÃ©es est incorrect.'),
    });
  }
}