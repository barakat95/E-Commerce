import { NgModule } from '@angular/core';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [],
  imports: [
    NzDrawerModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule,
  ],
  exports: [
    NzDrawerModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule
  ]
})
export class VendorModule { }
