import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingRightComponent } from './trending-right.component';

describe('TrendingRightComponent', () => {
  let component: TrendingRightComponent;
  let fixture: ComponentFixture<TrendingRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
