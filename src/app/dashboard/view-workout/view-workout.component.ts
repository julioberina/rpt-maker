import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    console.log(JSON.stringify(this.exercises));
  }

  private filterExercisesByWeek() {
    this.exercises = this.workout?.exercises?.filter((ex: any) => {
      return ex.week === this.currentWeek;
    });
  }
}
