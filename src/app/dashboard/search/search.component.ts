import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { filter } from 'rxjs/operators';

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
              private dashboardService: DashboardService) { }

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

  public addWorkout(id: string) {
    console.log('id = ' + id);
  }
}
