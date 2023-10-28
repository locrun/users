import { TestBed } from '@angular/core/testing';

import { FeatureUsersListService } from './feature-users-list.service';

describe('FeatureUsersListService', () => {
  let service: FeatureUsersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureUsersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
