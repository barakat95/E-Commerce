import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCircularCategoriesComponent } from './home-circular-categories.component';

describe('HomeCircularCategoriesComponent', () => {
  let component: HomeCircularCategoriesComponent;
  let fixture: ComponentFixture<HomeCircularCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCircularCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCircularCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
