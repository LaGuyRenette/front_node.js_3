import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { MaterialComponent } from './material/material.component';
import { ListFurnitureComponent } from './list-furniture/list-furniture.component';


@NgModule({
  declarations: [
    HomeComponent,
    FurnitureComponent,
    MaterialComponent,
    ListFurnitureComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
