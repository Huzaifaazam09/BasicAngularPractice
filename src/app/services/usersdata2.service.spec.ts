import { TestBed } from '@angular/core/testing';

import { Usersdata2Service } from './usersdata2.service';

describe('Usersdata2Service', () => {
  let service: Usersdata2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Usersdata2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
