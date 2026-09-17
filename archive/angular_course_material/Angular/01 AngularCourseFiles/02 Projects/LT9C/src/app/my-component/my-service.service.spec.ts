import { TestBed } from '@angular/core/testing';

import { MyService } from './my-service.service';

describe('MyServiceService', () => {
  let service: MyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a value', () => {
    expect(service.getValue()).toBe('Hello world service');
  });
});
