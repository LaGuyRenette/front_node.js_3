import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  constructor(private router: Router){}
  
  goToLoginPage(){
    this.router.navigate(['/login']);
  }
  goToCrudPage(){
    this.router.navigate(['/createFurniture']);
  }
  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
  goToListFurniture(category: string){
    this.router.navigate(['/furnitureList'], { queryParams: { category }});

  }
  goToMaterials(){
    this.router.navigate(['/material']);
  }

}
