import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorModule } from '../vendor/vendor.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VendorModule
  ],
  exports: [VendorModule, TranslateModule]
})
export class SharedModule { }
