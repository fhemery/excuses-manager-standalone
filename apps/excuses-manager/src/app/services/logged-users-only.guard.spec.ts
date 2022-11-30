import { TestBed } from '@angular/core/testing';

import { LoggedUsersOnlyGuard } from './logged-users-only.guard';

describe('LoggedUsersOnlyGuard', () => {
  let guard: LoggedUsersOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedUsersOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
