import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZodiacComponent } from './zodiac.component';

describe('ZodiacComponent', () => {
  let component: ZodiacComponent;
  let fixture: ComponentFixture<ZodiacComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZodiacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
