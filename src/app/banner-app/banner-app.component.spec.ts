import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAppComponent } from './banner-app.component';

describe('BannerAppComponent', () => {
  let component: BannerAppComponent;
  let fixture: ComponentFixture<BannerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
