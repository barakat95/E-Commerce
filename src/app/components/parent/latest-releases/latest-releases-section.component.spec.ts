import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestReleasesSectionComponent } from './latest-releases-section.component';

describe('LatestReleasesComponent', () => {
  let component: LatestReleasesSectionComponent;
  let fixture: ComponentFixture<LatestReleasesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestReleasesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestReleasesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
