import { TestBed, inject } from '@angular/core/testing';

import { PortalService } from './portal.service';
import { HttpModule} from "@angular/http";

describe('PortalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PortalService]
    });
  });

  it('should be created', inject([PortalService], (service: PortalService) => {
    expect(service).toBeTruthy();
  }));
});
