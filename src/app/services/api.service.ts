import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crew, Destinations, Technology } from '../shared/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiurl = environment.apiUrl;
  getCrew(id: string): Observable<Crew[]> {
    return this.http.get<Crew[]>(this.apiurl + '/crew/' + id);
  }
  getDestinations(id: string): Observable<Destinations[]> {
    return this.http.get<Destinations[]>(this.apiurl + '/destination/' + id);
  }
  getTechnology(id: string): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.apiurl + '/technology/' + id);
  }
}
