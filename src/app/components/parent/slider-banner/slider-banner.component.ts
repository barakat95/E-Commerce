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

  public array = ['https://www.seekpng.com/png/full/257-2579468_chinese-new-years-special-offer-outlet-banner.png',
    'https://www.pikpng.com/pngl/m/241-2417669_ribbon-png-youtube-thumbnail-banners-banner-posters-transparent.png',
    'https://media.istockphoto.com/vectors/sale-banner-template-discount-poster-design-price-off-special-offer-vector-id1136421303'];

  constructor() { }

  ngOnInit(): void { }

  pre() {
    this.myCarousel.pre();
  }

  next() {
    this.myCarousel.next();
  }

}
