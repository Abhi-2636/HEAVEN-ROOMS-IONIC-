import { TestBed } from '@angular/core/testing';

import { PgData } from './pg-data.service';

describe('PgData', () => {
  let service: PgData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PgData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
