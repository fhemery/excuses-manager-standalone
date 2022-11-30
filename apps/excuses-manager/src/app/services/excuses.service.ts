import { Injectable } from '@angular/core';
import { ExcusesHttpService } from './excuses-http.service';
import { Observable } from 'rxjs';
import { Excuse } from '../model/excuse';

@Injectable({
  providedIn: 'root',
})
export class ExcusesService {
  constructor(private readonly httpService: ExcusesHttpService) {}

  getRandom(nb: number): Observable<Excuse[]> {
    return this.httpService.getRandomExcuses(nb);
  }
}
