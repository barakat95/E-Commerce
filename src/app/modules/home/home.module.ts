import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from 'src/app/components/parent/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SliderBannerComponent } from 'src/app/components/parent/slider-banner/slider-banner.component';
import { HomeCircularCategoriesComponent } from 'src/app/components/parent/home-circular-categories/home-circular-categories.component';


@NgModule({
  declarations: [HomeComponent, SliderBannerComponent, HomeCircularCategoriesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
