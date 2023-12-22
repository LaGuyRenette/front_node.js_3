import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { MaterialComponent } from './material/material.component';
import { ListFurnitureComponent } from './list-furniture/list-furniture.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    HomeComponent,
    FurnitureComponent,
    MaterialComponent,
    ListFurnitureComponent,
    NotFoundComponent, 

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule

  ]
})
export class PublicModule { }