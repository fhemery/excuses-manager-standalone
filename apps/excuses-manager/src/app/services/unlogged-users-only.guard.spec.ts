import { TestBed } from '@angular/core/testing';

import { UnloggedUsersOnlyGuard } from './unlogged-users-only.guard';

describe('UnloggedUsersOnlyGuard', () => {
  let guard: UnloggedUsersOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnloggedUsersOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
