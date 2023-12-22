import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudFurnitureComponent } from './crud-furniture/crud-furniture.component'
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DetailMaterialComponent } from './detail-material/detail-material.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    CrudFurnitureComponent,
    DetailMaterialComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    MatTableModule, 
    MatCardModule,
    MatIconModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    MatFormFieldModule,
    MatSelectModule,
    NgxChartsModule,
    
  ]
})
export class AdminModule { }
