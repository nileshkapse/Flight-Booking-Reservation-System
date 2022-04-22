import { TestBed } from '@angular/core/testing';

import { UserLoginGuard } from './user-login.guard';

describe('UserLoginGuard', () => {
  let guard: UserLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
