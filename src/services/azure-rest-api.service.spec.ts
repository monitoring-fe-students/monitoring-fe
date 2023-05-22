import { TestBed } from '@angular/core/testing';

import { AzureRestApiService } from './azure-rest-api.service';

describe('AzureRestApiService', () => {
  let service: AzureRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
