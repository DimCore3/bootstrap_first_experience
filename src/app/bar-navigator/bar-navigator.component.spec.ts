import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarNavigatorComponent } from './bar-navigator.component';

describe('BarNavigatorComponent', () => {
  let component: BarNavigatorComponent;
  let fixture: ComponentFixture<BarNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
