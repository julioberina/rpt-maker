import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoints } from 'src/api-endpoints';
import { HttpService } from 'src/shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpService) { }

  public getAllWorkoutPrograms(): Observable<any> {
    return this.http.get(apiEndpoints.getAllWorkoutPrograms);
  }
}
