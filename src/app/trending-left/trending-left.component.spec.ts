import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingLeftComponent } from './trending-left.component';

describe('TrendingLeftComponent', () => {
  let component: TrendingLeftComponent;
  let fixture: ComponentFixture<TrendingLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
