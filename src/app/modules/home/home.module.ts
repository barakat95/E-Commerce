import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from 'src/app/components/parent/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeCircularCategoriesComponent } from 'src/app/components/parent/home-circular-categories/home-circular-categories.component';
import { LatestReleasesComponent } from 'src/app/components/parent/latest-releases/latest-releases.component';
import { HomeSectionOneComponent } from 'src/app/components/parent/home-section-one/home-section-one.component';
import { SectionTitleComponent } from 'src/app/components/parent/section-title/section-title.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, HomeCircularCategoriesComponent, LatestReleasesComponent, HomeSectionOneComponent, SectionTitleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule { }
