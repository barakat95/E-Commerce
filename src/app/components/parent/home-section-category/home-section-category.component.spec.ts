import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionCategoryComponent } from './home-section-category.component';

describe('HomeSectionCategoryComponent', () => {
  let component: HomeSectionCategoryComponent;
  let fixture: ComponentFixture<HomeSectionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectionCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
