import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CacheService } from 'src/shared/cache.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-view-workout',
  templateUrl: './view-workout.component.html',
  styleUrls: ['./view-workout.component.scss']
})
export class ViewWorkoutComponent implements OnInit {

  @Input() public workouts: any;
  @Output() public backToLiftTracker: EventEmitter<void> = new EventEmitter();

  public currentWeek = 1;
  public exercises: any;

  constructor(private dashboardService: DashboardService) { }

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
    if (this.currentWeek < this.workouts?.weeks) {
      this.currentWeek += 1;
      this.filterExercisesByWeek();
    }
  }

  daysPerWeek() {
    const result = [];
    for (let i = 1; i <= this.workouts?.frequency; ++i)  result.push(i);
    return result;
  }

  dayExercises(day: number) {
    return this.exercises.filter((ex: any) => {
      return ex.day === day;
    });
  }

  updateExercises() {
  }

  private filterExercisesByWeek() {
    this.exercises = this.workouts?.exercises?.filter((ex: any) => {
      return ex.week === this.currentWeek;
    });
  }
}
