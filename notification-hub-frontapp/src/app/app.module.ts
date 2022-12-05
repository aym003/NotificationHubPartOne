import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTableComponent } from './modules/product/components/product-table/product-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './modules/product/services/product.service';
import { NotificationPopupComponent } from './modules/shared/notification/components/notification-popup/notification-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    NotificationPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatIconModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
