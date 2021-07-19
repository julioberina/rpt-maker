import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWorkoutDialogComponent } from './delete-workout-dialog.component';

describe('DeleteWorkoutDialogComponent', () => {
  let component: DeleteWorkoutDialogComponent;
  let fixture: ComponentFixture<DeleteWorkoutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWorkoutDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWorkoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
