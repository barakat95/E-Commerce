import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestReleasesCardComponent } from './latest-releases-card.component';

describe('LatestReleasesCardComponent', () => {
  let component: LatestReleasesCardComponent;
  let fixture: ComponentFixture<LatestReleasesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestReleasesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestReleasesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
