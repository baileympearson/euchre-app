import { TestBed } from '@angular/core/testing';

import { IconRegistryService } from './icon-registry.service';

describe('IconRegistryServiceService', () => {
  let service: IconRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});