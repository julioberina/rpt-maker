import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardService } from '../dashboard.service';
import { DeleteWorkoutDialogComponent } from '../delete-workout-dialog/delete-workout-dialog.component';

@Component({
  selector: 'app-lift-tracker',
  templateUrl: './lift-tracker.component.html',
  styleUrls: ['./lift-tracker.component.scss']
})
export class LiftTrackerComponent implements OnInit {

  public workouts: any;

  constructor(private dashboardService: DashboardService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.workouts = this.dashboardService.getWorkouts();
  }

  viewWorkout(id: string) {
    console.log('viewId: ' + id);
  }

  deleteWorkout(id: string, alias: string) {
    const dialogRef = this.dialog.open(DeleteWorkoutDialogComponent, {
      width: '350px',
      data: { alias }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      }
    })
  }

  private delete(id: string) {
    this.dashboardService.deleteWorkout(id).subscribe(res => {
      this.snackBar.open('Workout deleted successfully', 'Close', {
        duration: 3000,
        panelClass: ['snack-bar']
      });

      this.workouts = this.dashboardService.getWorkouts();
    }, err => this.snackBar.open('Error deleting workout', 'Close', {
      duration: 3000,
      panelClass: ['snack-bar']
    }));
  }
}
