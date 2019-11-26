import { TestBed, async, inject } from '@angular/core/testing';

import { EntGuard } from './ent.guard';

describe('EntGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntGuard]
    });
  });

  it('should ...', inject([EntGuard], (guard: EntGuard) => {
    expect(guard).toBeTruthy();
  }));
});
