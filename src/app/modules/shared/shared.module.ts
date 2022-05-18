import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorModule } from '../vendor/vendor.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VendorModule
  ],
  exports: [VendorModule]
})
export class SharedModule { }
