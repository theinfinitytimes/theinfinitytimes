import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScitechComponent } from './scitech.component';

describe('ScitechComponent', () => {
  let component: ScitechComponent;
  let fixture: ComponentFixture<ScitechComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScitechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScitechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
