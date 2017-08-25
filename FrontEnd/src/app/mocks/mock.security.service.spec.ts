import { TestBed, inject } from '@angular/core/testing';

import { MockSecurityService } from './mock.security.service';

describe('SecurityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockSecurityService]
    });
  });

  it('should be created', inject([MockSecurityService], (service: MockSecurityService) => {
    expect(service).toBeTruthy();
  }));
});
