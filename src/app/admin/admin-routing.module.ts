import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudFurnitureComponent } from './crud-furniture/crud-furniture.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'createFurniture', component: CrudFurnitureComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  
  
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
