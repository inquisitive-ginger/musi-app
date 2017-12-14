import { TestBed, inject } from '@angular/core/testing';

import { FretboardService } from './fretboard.service';

describe('FretboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FretboardService]
    });
  });

  it('should be created', inject([FretboardService], (service: FretboardService) => {
    expect(service).toBeTruthy();
  }));
});
