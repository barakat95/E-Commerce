import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { CarouselConfig } from 'ng-zorro-antd/core/config';

@Component({
  selector: 'app-slider-banner',
  templateUrl: './slider-banner.component.html',
  styleUrls: ['./slider-banner.component.scss']
})
export class SliderBannerComponent implements OnInit {

  @ViewChild(NzCarouselComponent, { static: false }) myCarousel: any;

  public array = ['https://appliance.com.eg/wp-content/uploads/2022/01/Dana-2.png',
    'https://png.pngitem.com/pimgs/s/527-5276265_electronic-and-furniture-hd-png-download.png',
    'https://www.kindpng.com/picc/m/247-2474628_electronics-items-png-facebook-shop-cover-design-transparent.png',];

  constructor() { }

  ngOnInit(): void { }

  prev() {
    this.myCarousel.pre();
  }

  next() {
    this.myCarousel.next();
  }

}
