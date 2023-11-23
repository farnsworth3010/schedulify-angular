import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../interfaces/schedule';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient) {}
  baseURL = 'http://79.133.181.113:8585/api.php';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getScheduleById(id: string): Observable<Schedule[]> {
    const url = `${this.baseURL}?group_id=${id}`
    return this.http.get<Schedule[]>(url)
  }
}
