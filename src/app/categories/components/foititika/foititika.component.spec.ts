import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FoititikaComponent } from './foititika.component';

describe('FoititikaComponent', () => {
  let component: FoititikaComponent;
  let fixture: ComponentFixture<FoititikaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FoititikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoititikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
