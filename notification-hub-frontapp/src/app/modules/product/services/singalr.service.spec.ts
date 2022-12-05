import { TestBed } from '@angular/core/testing';

import { SingalrService } from './singalr.service';

describe('SingalrService', () => {
  let service: SingalrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingalrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
