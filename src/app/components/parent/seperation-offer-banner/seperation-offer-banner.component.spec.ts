import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeperationOfferBannerComponent } from './seperation-offer-banner.component';

describe('SeperationOfferBannerComponent', () => {
  let component: SeperationOfferBannerComponent;
  let fixture: ComponentFixture<SeperationOfferBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeperationOfferBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeperationOfferBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
