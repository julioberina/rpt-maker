import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CacheService } from 'src/shared/cache.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-view-workout',
  templateUrl: './view-workout.component.html',
  styleUrls: ['./view-workout.component.scss']
})
export class ViewWorkoutComponent implements OnInit {

  @Input() public workout: any;
  @Output() public backToLiftTracker: EventEmitter<void> = new EventEmitter();

  public currentWeek = 1;
  public exercises: any;
  public displayedColumns = ['name', 'sets', 'weight', 'firstSetReps', 'breaks']
  public isSubmitted = false;

  constructor(private dashboardService: DashboardService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.filterExercisesByWeek();
  }

  back() {
    this.backToLiftTracker.emit();
  }

  prev() {
    if (this.currentWeek > 1) {
      this.currentWeek -= 1;
      this.filterExercisesByWeek();
    }
  }

  next() {
    if (this.currentWeek < this.workout?.weeks) {
      this.currentWeek += 1;
      this.filterExercisesByWeek();
    }
  }

  daysPerWeek() {
    const result = [];
    for (let i = 1; i <= this.workout?.frequency; ++i)  result.push(i);
    return result;
  }

  dayExercises(day: number) {
    return this.exercises.filter((ex: any) => {
      return ex.day === day;
    });
  }

  updateExercises() {
    this.isSubmitted = true;

    this.dashboardService.updateExercises(this.exercises).subscribe(
      res => {
          this.isSubmitted = false;
          this.snackBar.open('Exercises updated successfully', 'Dismiss', { 
            duration: 3000,
            panelClass: ['snack-bar']
          });
      }, 
      err => {
        this.snackBar.open('Invalid Username or Password', 'Dismiss', { 
          duration: 3000,
          panelClass: ['snack-bar']
        });
        console.error(err);
        this.isSubmitted = false;
      }
    );
  }

  startTimer(element: any) {
    if (element.breaks > 0) {
      element.breaks -= 1;
      const audio = new Audio('assets/alert.wav');
      audio.load();
      audio.play();
    }
  }

  toNumber(element: any) {
    element.weight = +element.weight;
    element.firstSetReps = +element.firstSetReps;
  }

  private filterExercisesByWeek() {
    this.exercises = this.workout?.exercises?.filter((ex: any) => {
      return ex.week === this.currentWeek;
    });
  }
}
