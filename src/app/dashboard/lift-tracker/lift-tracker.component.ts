import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-lift-tracker',
  templateUrl: './lift-tracker.component.html',
  styleUrls: ['./lift-tracker.component.scss']
})
export class LiftTrackerComponent implements OnInit {

  public workouts: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.workouts = this.dashboardService.getWorkouts();
  }

  viewWorkout(id: string) {
    console.log('viewId: ' + id);
  }

  deleteWorkout(id: string) {
    console.log('deleteId: ' + id);
  }
}
