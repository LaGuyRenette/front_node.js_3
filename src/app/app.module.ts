import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublicModule } from './public/public.module';
import { HeaderComponent } from './shared/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './shared/nav/nav.component';
import { CredentialsInterceptor } from './interceptors/credentials.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    NgbModule,
    PublicModule,
    MatIconModule,
    NgxChartsModule,
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
