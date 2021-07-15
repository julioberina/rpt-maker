import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiEndpoints } from 'src/api-endpoints';
import { CacheService } from 'src/shared/cache.service';
import { HttpService } from 'src/shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpService,
              private cacheService: CacheService,) { }

  public getWorkouts(): Observable<any> {
    const data = this.cacheService.get('getWorkouts');

    return data ? of(data) : this.http.get(apiEndpoints.workouts).pipe(
      map(item => {
        this.cacheService.add('getWorkouts', item);
        return item;
      })
    );
  }

  public getAllWorkoutPrograms(): Observable<any> {
    const data = this.cacheService.get('getAllWorkoutPrograms');

    return data ? of(data) : this.http.get(apiEndpoints.getAllWorkoutPrograms).pipe(
      map(item => {
        this.cacheService.add('getAllWorkoutPrograms', item);
        return item;
      })
    );
  }

  public deleteWorkout(id: string) {
    const data = this.cacheService.get('deleteWorkoutId');

    return data ? of(data) : this.http.delete(`${apiEndpoints.workouts}/${id}`).pipe(
      map(item => {
        this.cacheService.add('deleteWorkoutId', item);
        return item;
      })
    );
  }
}
