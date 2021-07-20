import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoints } from 'src/api-endpoints';
import { HttpService } from 'src/shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpService) { }

  public createUser(data: any): Observable<any> {
    return this.http.post(apiEndpoints.signup, data);
  }
}
