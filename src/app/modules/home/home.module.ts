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
import { SeperationOfferBannerComponent } from 'src/app/components/parent/seperation-offer-banner/seperation-offer-banner.component';
import { HomeSectionTwoComponent } from 'src/app/components/parent/home-section-two/home-section-two.component';
import { HomeSectionThreeComponent } from 'src/app/components/parent/home-section-three/home-section-three.component';
import { SeperationOfferBannerVerticalComponent } from 'src/app/components/parent/seperation-offer-banner-vertical/seperation-offer-banner-vertical.component';
import { HomeSectionCategoryComponent } from 'src/app/components/parent/home-section-category/home-section-category.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeCircularCategoriesComponent,
    LatestReleasesComponent,
    HomeSectionOneComponent,
    HomeSectionTwoComponent,
    HomeSectionThreeComponent,
    SectionTitleComponent,
    SeperationOfferBannerComponent,
    SeperationOfferBannerVerticalComponent,
    HomeSectionCategoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule { }
