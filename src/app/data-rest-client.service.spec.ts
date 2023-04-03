import { TestBed } from '@angular/core/testing';

import { DataRestClientService } from './data-rest-client.service';

describe('DataRestClientService', () => {
  let service: DataRestClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRestClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
