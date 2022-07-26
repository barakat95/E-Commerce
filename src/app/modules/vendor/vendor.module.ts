import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRateModule } from 'ng-zorro-antd/rate';



@NgModule({
  declarations: [],
  imports: [
    NzDrawerModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzAutocompleteModule,
    NzInputModule,
    NzBadgeModule,
    NzGridModule,
    NzCarouselModule,
    NzButtonModule,
    NzRateModule
  ],
  exports: [
    NzDrawerModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzAutocompleteModule,
    NzInputModule,
    NzBadgeModule,
    NzGridModule,
    NzCarouselModule,
    NzButtonModule,
    NzRateModule
  ]
})
export class VendorModule { }
