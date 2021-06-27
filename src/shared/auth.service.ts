import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoints } from 'src/api-endpoints';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpService) { }

  isLoggedIn() {
    const parsedPayload = this.getJwt();
    return parsedPayload.exp && parsedPayload.exp > Date.now() / 1000; // check if token is expired
  }

  login(data: any): Observable<any> {
    return this.http.post(apiEndpoints.login, data);
  }

  getJwt() {
    const token = localStorage.getItem('token'); // get token from local storage
    const payload = atob(token?.split('.')[1] || ''); // decode payload of token
    const parsedPayload = payload ? JSON.parse(payload) : {}; // convert payload into an Object
    return parsedPayload;
  }
}
