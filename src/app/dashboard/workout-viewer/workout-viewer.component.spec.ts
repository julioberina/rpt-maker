import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutViewerComponent } from './workout-viewer.component';

describe('WorkoutViewerComponent', () => {
  let component: WorkoutViewerComponent;
  let fixture: ComponentFixture<WorkoutViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
