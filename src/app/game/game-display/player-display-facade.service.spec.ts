import { TestBed } from '@angular/core/testing';

import { PlayerDisplayFacadeService } from './player-display-facade.service';

describe('PlayerDisplayFacadeService', () => {
  let service: PlayerDisplayFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerDisplayFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
