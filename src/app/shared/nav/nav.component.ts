import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  isLogged: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    // this.authService.isLoggedEmitter.subscribe(res => this.isLogged = res);
  }

  logout() {
    this.authService.logout().subscribe();
    this.router.navigate(["/"]);
    this.isLogged = false;
  }
  
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
