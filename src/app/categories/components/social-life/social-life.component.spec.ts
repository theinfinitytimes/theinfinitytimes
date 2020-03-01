import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLifeComponent } from './social-life.component';

describe('SocialLifeComponent', () => {
  let component: SocialLifeComponent;
  let fixture: ComponentFixture<SocialLifeComponent>;

  beforeEach(async(() => {
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
