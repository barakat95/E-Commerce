import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from 'src/app/components/parent/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeCircularCategoriesComponent } from 'src/app/components/parent/home-circular-categories/home-circular-categories.component';
import { LatestReleasesComponent } from 'src/app/components/parent/latest-releases/latest-releases.component';


@NgModule({
  declarations: [HomeComponent, HomeCircularCategoriesComponent, LatestReleasesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
