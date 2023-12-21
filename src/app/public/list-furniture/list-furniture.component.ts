import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-furniture',
  templateUrl: './list-furniture.component.html',
  styleUrls: ['./list-furniture.component.scss']
})
export class ListFurnitureComponent {
  selectedCategory: string = '';
  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'];
    });
  }
  goToFurniture(){
    this.router.navigate(['/furniture'])
  }
}
