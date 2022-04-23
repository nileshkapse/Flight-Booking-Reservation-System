import { TestBed } from '@angular/core/testing';

import { FlightGudardGuard } from './flight-gudard.guard';

describe('FlightGudardGuard', () => {
  let guard: FlightGudardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FlightGudardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
