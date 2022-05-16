import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendorModule } from './modules/vendor/vendor.module';
import { DrawerComponent } from './layout/drawer/drawer.component';
import { LayoutComponent } from './layout/layout/layout.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    LayoutComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  VendorModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
