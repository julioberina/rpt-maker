import { Injectable } from '@angular/core';
import { concat, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiEndpoints } from 'src/api-endpoints';
import { CacheService } from 'src/shared/cache.service';
import { HttpService } from 'src/shared/http.service';
import * as workTimers from 'worker-timers';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpService,
              private cacheService: CacheService,) {

    this.dashTimer(false, 0);
  }

  public createWorkout(data: any): Observable<any> {
    const obs1 = this.http.post(apiEndpoints.workouts, data);
    const obs2 = this.http.get(apiEndpoints.workouts).pipe(
      map(item => {
        this.cacheService.add('getWorkouts', item);
        return item;
      })
    );

    return concat(obs1, obs2);
  }

  public getWorkouts(): Observable<any> {
    const data = this.cacheService.get('getWorkouts');

    return data ? of(data) : this.http.get(apiEndpoints.workouts).pipe(
      map(item => {
        this.cacheService.add('getWorkouts', item);
        return item;
      })
    );
  }

  public getWorkoutsNoCache(): Observable<any> {
    return this.http.get(apiEndpoints.workouts).pipe(
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

  public updateExercises(exercises: any) {
    const obs1 = this.http.put(apiEndpoints.exercises, exercises);
    const obs2 = this.http.get(apiEndpoints.workouts).pipe(
      map(item => {
        this.cacheService.add('getWorkouts', item);
        return item;
      })
    );

    return concat(obs1, obs2);
  }

  public deleteWorkout(id: string) {
    const obs1 = this.http.delete(`${apiEndpoints.workouts}/${id}`);
    const obs2 = this.http.get(apiEndpoints.workouts).pipe(
      map(item => {
        this.cacheService.add('getWorkouts', item);
        return item;
      })
    );

    return concat(obs1, obs2);
  }

  public dashTimer(startNew: boolean, time: number) {
    const isTimerActive = this.cacheService.get('isTimerActive');

    if (!isTimerActive && startNew) {
      this.cacheService.add('isTimerActive', true);
      this.cacheService.add('secondsRemaining', time);
    } else if ((!isTimerActive && !startNew) || (isTimerActive && startNew)) {
      return;
    } 

    const audio = new Audio('assets/alert.wav');
    audio.load();

    const secondPass = setInterval(() => {
      let secondsRemaining = this.cacheService.get('secondsRemaining');
      
      if (secondsRemaining <= 0) {
        audio.play();
        this.cacheService.remove('isTimerActive');
        this.cacheService.remove('secondsRemaining');
        clearInterval(secondPass);
      } else {
        secondsRemaining -= 1000;
        this.cacheService.add('secondsRemaining', secondsRemaining);
      }
    }, 1000);
  }
}
