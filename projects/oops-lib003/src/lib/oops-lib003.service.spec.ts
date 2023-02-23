import { TestBed } from '@angular/core/testing';

import { OopsLib003Service } from './oops-lib003.service';

describe('OopsLib003Service', () => {
  let service: OopsLib003Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OopsLib003Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
