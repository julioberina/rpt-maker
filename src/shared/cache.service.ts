import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private rptCache: any = {};

  constructor() { 
    this.updateCache();
  }

  public add(name: string, value: any) {
    this.rptCache[name] = value;
    localStorage.setItem('rptCache', JSON.stringify(this.rptCache));
  }

  public remove(name: string) {
    this.rptCache[name] = undefined;
    localStorage.setItem('rptCache', JSON.stringify(this.rptCache));
  }

  public get(name: string) {
    return this.rptCache[name];
  }

  public clear() {
    this.rptCache = {};
    localStorage.removeItem('rptCache');
  }

  public updateCache() {
    this.rptCache = JSON.parse(localStorage.getItem('rptCache') || '{}');
  }
}
