import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftTrackerComponent } from './lift-tracker.component';

describe('LiftTrackerComponent', () => {
  let component: LiftTrackerComponent;
  let fixture: ComponentFixture<LiftTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
