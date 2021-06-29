import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoints } from 'src/api-endpoints';
import { HttpService } from 'src/shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpService) { }

  public getWorkouts(): Observable<any> {
    return this.http.get(apiEndpoints.workouts);
  }

  public getAllWorkoutPrograms(): Observable<any> {
    return this.http.get(apiEndpoints.getAllWorkoutPrograms);
  }

  public deleteWorkout(id: string) {
    return this.http.delete(`${apiEndpoints.workouts}/${id}`);
  }
}
