import { TestBed, inject } from '@angular/core/testing';

import { MockPortalService } from './mock.portal.service';

describe('PortalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockPortalService]
    });
  });

  it('should be created', inject([MockPortalService], (service: MockPortalService) => {
    expect(service).toBeTruthy();
  }));
});
