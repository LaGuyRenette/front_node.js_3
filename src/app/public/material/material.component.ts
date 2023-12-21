import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent {
  constructor(private router: Router){}
  goToStat(){
    this.router.navigate(['/detailMaterial']);

  }
}
