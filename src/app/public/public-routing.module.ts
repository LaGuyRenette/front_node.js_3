import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { MaterialComponent } from './material/material.component';
import { ListFurnitureComponent } from './list-furniture/list-furniture.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'furniture', component : FurnitureComponent},
  { path: 'material', component: MaterialComponent},
  { path: 'funitureList', component: ListFurnitureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
