import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeperationOfferBannerVerticalComponent } from './seperation-offer-banner-vertical.component';

describe('SeperationOfferBannerVerticalComponent', () => {
  let component: SeperationOfferBannerVerticalComponent;
  let fixture: ComponentFixture<SeperationOfferBannerVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeperationOfferBannerVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeperationOfferBannerVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
