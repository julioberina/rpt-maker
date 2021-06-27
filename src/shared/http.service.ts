import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private token: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.token = localStorage.getItem('token') || '';
    this.headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
  }

  public get(url: string, options?: any) {
    return this.http.get(url, this.getOptions(options)); 
  }

  public post(url: string, data: any, options?: any) {
    return this.http.post(url, data, this.getOptions(options)); 
  }

  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, this.getOptions(options)); 
  }

  public delete(url: string, options?: any) { 
    return this.http.delete(url, this.getOptions(options)); 
  }

  private getOptions(options?: any) {
    const head = { headers: this.headers };
    return options ? { ...options, ...head } : head;
  }
}
