import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SocialLifeComponent } from './social-life.component';

describe('SocialLifeComponent', () => {
  let component: SocialLifeComponent;
  let fixture: ComponentFixture<SocialLifeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
