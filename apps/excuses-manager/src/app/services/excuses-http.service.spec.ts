import { ExcusesHttpService } from './excuses-http.service';
import { HttpClient } from '@angular/common/http';
import { of, take } from 'rxjs';
import { Excuse } from '../model/excuse';

describe('ExcusesHttpService', () => {
  let service: ExcusesHttpService;
  let httpClient: HttpClient;

  beforeEach(() => {
    httpClient = {
      get: jest.fn().mockReturnValue(
        of([
          {
            id: 12,
            excuse: "Sorry I can't",
            category: 'notreallyanExcuse',
          } as Excuse,
        ])
      ),
    } as unknown as HttpClient;
    service = new ExcusesHttpService(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return random excuses when requested', function () {
    let excuses: Excuse[] = [];
    service
      .getRandomExcuses(3)
      .pipe(take(1))
      .subscribe((exc) => (excuses = exc));

    expect(excuses).toHaveLength(1);
    expect(excuses[0].id).toBe(12);
    expect(httpClient.get).toHaveBeenCalledWith('/api/excuse/3');
  });
});
