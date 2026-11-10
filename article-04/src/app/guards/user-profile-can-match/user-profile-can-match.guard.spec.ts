import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { userProfileCanMatchGuard } from './user-profile-can-match.guard';

describe('userProfileCanMatchGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userProfileCanMatchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
