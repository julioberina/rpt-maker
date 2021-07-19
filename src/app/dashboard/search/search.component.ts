import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddWorkoutDialogComponent } from '../add-workout-dialog/add-workout-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private workoutPrograms$: any;

  public fg: any;
  public workoutPrograms: any;

  constructor(private fb: FormBuilder,
              private dashboardService: DashboardService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      query: ['']
    });

    this.workoutPrograms$ = this.dashboardService.getAllWorkoutPrograms();
    this.workoutPrograms = this.workoutPrograms$;
  }

  public search() {
    const query = this.fg.controls.query.value;

    if (query) {
      this.workoutPrograms = this.workoutPrograms$.pipe(filter((wp: any) => { 
        return wp.name === query;
      }));
    } else {
      this.workoutPrograms = this.workoutPrograms$;
    }
  }

  public addWorkout(name: string) {
    const dialogRef = this.dialog.open(AddWorkoutDialogComponent, {
      width: '350px',
      data: { name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.add({ ...result, name });
      }
    });
  }

  private add(data: { alias: string, name: string }) {
    this.dashboardService.createWorkout(data).subscribe(res => {
      this.snackBar.open('Workout created successfully', 'Close', {
        duration: 3000,
        panelClass: ['snack-bar']
      });
    },
    err => this.snackBar.open('Error creating workout', 'Close', {
      duration: 3000,
      panelClass: ['snack-bar']
    }));
  }
}
