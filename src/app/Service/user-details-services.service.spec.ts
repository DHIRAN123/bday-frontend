import { TestBed } from '@angular/core/testing';

import { UserDetailsServicesService } from './user-details-services.service';

describe('UserDetailsServicesService', () => {
  let service: UserDetailsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
