import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { numberGuard } from './number.guard';



describe('numberGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => numberGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
