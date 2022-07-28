import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionThreeComponent } from './home-section-three.component';

describe('HomeSectionThreeComponent', () => {
  let component: HomeSectionThreeComponent;
  let fixture: ComponentFixture<HomeSectionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectionThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
