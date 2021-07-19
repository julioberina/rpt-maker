import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddWorkoutDialogComponent } from '../add-workout-dialog/add-workout-dialog.component';

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
        console.log(`Alias: ${result.alias}`);
      }
    });
  }
}
