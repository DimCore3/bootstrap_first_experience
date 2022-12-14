import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtCarouselComponent } from './bt-carousel.component';

describe('BtCarouselComponent', () => {
  let component: BtCarouselComponent;
  let fixture: ComponentFixture<BtCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
