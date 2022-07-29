import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorModule } from '../vendor/vendor.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProductCardComponent } from 'src/app/components/parent/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { CategoryCardComponent } from 'src/app/components/parent/category-card/category-card.component';
import { LatestReleasesCardComponent } from 'src/app/components/parent/latest-releases-card/latest-releases-card.component';



@NgModule({
  declarations: [ProductCardComponent, CategoryCardComponent, LatestReleasesCardComponent],
  imports: [
    CommonModule,
    VendorModule,
    FormsModule
  ],
  exports: [VendorModule, TranslateModule, ProductCardComponent, CategoryCardComponent, LatestReleasesCardComponent]
})
export class SharedModule { }
