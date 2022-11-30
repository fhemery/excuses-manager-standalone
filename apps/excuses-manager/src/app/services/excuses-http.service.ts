import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Excuse } from '../model/excuse';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExcusesHttpService {
  constructor(private readonly httpClient: HttpClient) {}

  getRandomExcuses(nb: number): Observable<Excuse[]> {
    return this.httpClient.get<Excuse[]>(`${environment.apiUrl}/excuse/${nb}`);
  }
}
