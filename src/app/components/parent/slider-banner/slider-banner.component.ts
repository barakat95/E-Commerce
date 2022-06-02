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

  public array = ['./assets/images/banner/banner1.jpg', './assets/images/banner/banner2.jpg', './assets/images/banner/banner3.jpg'];

  constructor() { }

  ngOnInit(): void { }

  prev() {
    this.myCarousel.pre();
  }

  next() {
    this.myCarousel.next();
  }

}
